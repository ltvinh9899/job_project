from django.db import models

# Create your models here.

class account_user(models.Model):
    user_email = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

class profile_user(models.Model):
    id_user = models.OneToOneField(account_user, on_delete=models.CASCADE, default=1)
    full_name = models.CharField(max_length=255)
    cv = models.FileField(upload_to='cv/%Y/%m/%d/')

class Job(models.Model):
    id_company = models.ForeignKey('company_info',on_delete=models.CASCADE)
    id_address = models.ForeignKey('company_address', on_delete=models.CASCADE, default=1)
    id_location = models.ForeignKey('location', on_delete=models.CASCADE, default=1)
    id_job_type = models.ForeignKey('job_type', on_delete=models.CASCADE, default=1)
    name = models.CharField(max_length=255, default='dev')
    description = models.TextField(max_length=10000)
    offer_salary = models.IntegerField(default=0)
    requirement = models.TextField(max_length=10000,default="type requirement in here")

class job_type(models.Model):
    name_job_type = models.CharField(max_length=255)

class company_info(models.Model):
    name_company = models.CharField(max_length=255)
    email_company = models.CharField(max_length=255, default='mail')
    back_ground_company = models.URLField(default='https://cdn.itviec.com/photos/45720/processed_headline_photo/viettel-group-tuyen-dung-viec-lam-IT-headline_photo-1512381.jpg?H43eaiySzXeJcgwxGr8DYN29')
    description_company = models.TextField(max_length=10000)
    logo_company = models.URLField()
    id_address = models.ForeignKey('company_address', on_delete=models.CASCADE,default=1)
    id_country = models.ForeignKey('country', on_delete=models.CASCADE,default=1)

class company_address(models.Model):
    id_district = models.ForeignKey('districst', on_delete=models.CASCADE, default=1)
    address = models.CharField(max_length=255)

class location(models.Model):
    name_location = models.CharField(max_length=255)

class country(models.Model):
    name_country = models.CharField(max_length=255)

class districst(models.Model):
    name_district = models.CharField(max_length=255)
    id_city = models.ForeignKey('city',on_delete=models.CASCADE)

class city(models.Model):
    name_city = models.CharField(max_length=255)




