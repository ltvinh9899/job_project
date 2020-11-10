from rest_framework import serializers
from .models import Job, company_info, company_address, job_type, location, districst, city, account_user, profile_user
import base64

class addressSerializer(serializers.ModelSerializer):
    class Meta:
        model = company_address
        fields = '__all__'

class CompanyInfoSerializer(serializers.ModelSerializer):
    city = serializers.SerializerMethodField('get_city', read_only=True)
    country = serializers.SerializerMethodField('get_country', read_only=True)
    # job = serializers.SerializerMethodField('get_job', read_only=True)

    def get_country(self, obj):
        return obj.id_country.name_country
    def get_city(self, obj):
        return obj.id_address.id_district.id_city.name_city

    # def get_job(self, obj):
    #     return JobSerializer(obj.id_company).data

    class Meta:
        model = company_info
        fields = '__all__'

class JobTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = job_type
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = location
        fields = '__all__'

class DistricstSerializer(serializers.ModelSerializer):
    class Meta:
        model = districst
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = city
        fields = '__all__'

class JobSerializer(serializers.ModelSerializer):

    logo_company = serializers.SerializerMethodField('get_logo_company', read_only=True)
    name_company = serializers.SerializerMethodField('get_name_company', read_only=True)
    name_job_type = serializers.SerializerMethodField('get_job_type_name', read_only=True)
    job_position = serializers.SerializerMethodField('get_job_position', read_only=True)
    address = serializers.SerializerMethodField('get_address',read_only=True)
    districst = serializers.SerializerMethodField('get_districst', read_only=True)
    city = serializers.SerializerMethodField('get_city', read_only=True)
    country = serializers.SerializerMethodField('get_country', read_only=True)
    back_ground_company = serializers.SerializerMethodField('get_back_ground_company', read_only=True)

    class Meta:
        model = Job
        fields = '__all__'

    def get_logo_company(self, obj):
        return obj.id_company.logo_company

    def get_name_company(self, obj):
        return obj.id_company.name_company

    def get_job_type_name(self, obj):
        return obj.id_job_type.name_job_type

    def get_job_position(self, obj):
        return obj.id_location.name_location

    def get_address(self, obj):
        return obj.id_address.address

    def get_districst(self, obj):
        return obj.id_address.id_district.name_district

    def get_city(self, obj):
        return obj.id_address.id_district.id_city.name_city

    def get_country(self, obj):
        return obj.id_company.id_country.name_country

    def get_back_ground_company(self, obj):
        return obj.id_company.back_ground_company

class AccountUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = account_user
        fields = '__all__'

class ProfileUserSerializer(serializers.ModelSerializer):
    # account_user = serializers.SerializerMethodField('get_account')

    class Meta:
        model = profile_user
        fields = '__all__'

    # def get_account(self, obj):
    #     return AccountUserSerializer(obj.id_user).data