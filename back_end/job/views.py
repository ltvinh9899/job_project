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
                    return Response({'message': "Thành công"})
                else:
                    return Response({'message': "Mật khẩu không đúng"})

            return Response({'message': "Thất bại"})

        except Exception as e:
            print(e)
            return Response({'message': "Đã có lỗi xảy ra 2"})

class ProfileUserAPI(APIView):

    def post(self, request, id_user):
        user = profile_user.objects.get(id_user=id_user)
        user_profile_serializer = ProfileUserSerializer(instance=user,data=request.data)
        # print('hello')
        # print(request.data)
        if user_profile_serializer.is_valid():
            try:
                user_profile_serializer.save()

                return Response({"success": True, "message": "Apply thành công"})
            # except IntegrityError:
            #     return Response({"success": False, "message": "Bản ghi đã tồn tại"})
            except Exception as e:
                return Response({"success": False, "message": "Đã có lỗi xảy ra"})
        else:
            return Response({"success": False, "message": user_profile_serializer.errors})

    def get(self, request):
        user = profile_user.objects.all()
        serializer = ProfileUserSerializer(user, many=True)
        return Response(serializer.data)

