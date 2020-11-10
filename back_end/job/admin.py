from django.contrib import admin
from .models import account_user, profile_user, Job, job_type, company_info, company_address, location, country, districst, city

# Register your models here.

admin.site.register(account_user)
admin.site.register(profile_user)
admin.site.register(Job)
admin.site.register(job_type)
admin.site.register(company_info)
admin.site.register(company_address)
admin.site.register(location)
admin.site.register(country)
admin.site.register(districst)
admin.site.register(city)


