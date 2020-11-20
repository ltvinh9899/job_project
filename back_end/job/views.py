from django.http import HttpResponse, JsonResponse
from django.db.utils import IntegrityError
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authtoken.models import Token
from .serializers import JobSerializer, CompanyInfoSerializer, AccountUserSerializer, ProfileUserSerializer
from .models import Job, company_info, profile_user, account_user

# Create your views here.

# class Jobapi(APIView):
#     def get(self,request):
#         jobs = Job.objects.raw("SELECT job_job.id,job_company_info.id, job_company_info.logo_company, job_job.description FROM job_job INNER JOIN job_company_info ON job_job.id_company_id = job_company_info.id;")
#         serializer = JobSerializer(jobs, many=True)
#         return  Response(serializer.data)
#
#
#
# class Companyapi(viewsets.ModelViewSet):
#     queryset = company_info.objects.all()
#     serializer_class = CompanyInfoSerializer

# @api_view(['GET'])
# def jobView(request):
#
#     return Response('hello_world!')

@api_view(['GET'])
def jobList(request):

    jobs = Job.objects.all()
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def jobListFollowType(request, id_job_type):

    jobs = Job.objects.filter(id_job_type=id_job_type)
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def jobListFollowPosition(request, id_position):

    jobs = Job.objects.filter(id_location=id_position)
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def jobListFollowCompany(request, id_company):

    jobs = Job.objects.filter(id_company=id_company)
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def companyList(request):
    companies = company_info.objects.all()
    serializer = CompanyInfoSerializer(companies,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def companyDetail(request, id_company):
    company = company_info.objects.get(id=id_company)
    serializer = CompanyInfoSerializer(company, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def  jobDetail(request, id_job):
    jobs = Job.objects.get(id=id_job)
    serializer = JobSerializer(jobs, many=False)
    return Response(serializer.data)


class SignUserAccountAPI(APIView):

    def post(self, request):
        user_serializer = AccountUserSerializer(data=request.data)
        if user_serializer.is_valid():
            try:
                user_serializer.save()

                return Response({"success": True, "message": "Đăng kí thành công"})
            except IntegrityError:
                return Response({"success": False, "message": "Bản ghi đã tồn tại"})
            except Exception as e:
                return Response({"success": False, "message": "Đã có lỗi xảy ra"})
        else:
            return Response({"success": False, "message": user_serializer.errors})


    def get(self, request):
        user = account_user.objects.all()
        serializer = AccountUserSerializer(user, many=True)
        return Response(serializer.data)

class LoginApi(APIView):

    def post(self,request):
        user_serializer = AccountUserSerializer(data=request.data)

        try:
            # print(user_serializer.data['user_email'])
            if user_serializer.is_valid():
                users = account_user.objects.filter(user_name=user_serializer.data['user_name'])

                user_password = [user.password for user in users]

                if user_serializer.data['password'] in user_password:
                    return Response({"success": True,'message': "Thành công"})
                else:
                    return Response({"success": False,'message': "Mật khẩu không đúng"})

            return Response({"success": False,'message': "Thất bại"})

        except Exception as e:
            print(e)
            return Response({'message': "Đã có lỗi xảy ra 2"})

class ProfileUserAPI(APIView):

    def post(self, request):

        # user_profile_serializer = ProfileUserSerializer(instance=user,data=request.data)
        # print('hello')
        # print(request.data)
        # if user_profile_serializer.is_valid():

        try:

            user = profile_user.objects.get(id_user=request.data['id_user'])
            print('hello')
            print(user)
            # if user:
            user.cv = request.data['cv']
            user.full_name = request.data['full_name']
            user.save()
            return Response({"success": True, "message": "Cập nhật thành công"})

        # except IntegrityError:
        #     # user = profile_user.objects.get(id_user=request.data['id_user'])
        #     # user.full_name = request.data['full_name']
        #     # user.cv = request.data['cv']
        #     # user.save()
        #     return Response({"success": False, "message": "Bản ghi đã tồn tại"})
        except Exception as e:

            try:
                user_profile_serializer = ProfileUserSerializer(data=request.data)
                if user_profile_serializer.is_valid():
                    user_profile_serializer.save()
                    return Response({"success": True, "message": "Apply thành công"})
            except Exception as e:
                return Response({"success": False, "message": e})
            return Response({"success": False, "message": e})
        # except Exception as e:
        #     return Response({"success": False, "message": e})

    def get(self, request):
        user = profile_user.objects.all()
        serializer = ProfileUserSerializer(user, many=True)
        return Response(serializer.data)


class SearchingJobAPI(APIView):

    def post(self, request):
        searching = request.data
        jobs = Job.objects.all()
        jobs_list = []

        try:
            for job in jobs:
                name_job = str(job.name)
                name_company = str(job.id_company.name_company)

                checking_list = name_job.upper() + name_job.lower() + name_job + name_company.upper() + name_company.lower() + name_company

                if searching['searching_text'] in checking_list:
                    jobs_list.append(job)


            serializer = JobSerializer(jobs_list, many=True)
            return Response(serializer.data)

        except Exception as e:
            return Response({"message": e})


class SearchingCompanyAPI(APIView):

    def post(self, request):
        searching = request.data
        companies = company_info.objects.all()
        companies_list = []

        try:
            for company in companies:
                name_company = str(company.name_company)

                checking_list = name_company.lower() + name_company.upper() + name_company

                if searching['searching_text'] in checking_list:
                    companies_list.append(company)

            serializer = CompanyInfoSerializer(companies_list, many=True)
            return Response(serializer.data)

        except Exception as e:
            return Response({"message": e})