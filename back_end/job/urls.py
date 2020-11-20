from django.urls import path
from . import views



app_name = 'job'
urlpatterns = [
    path('job-list/', views.jobList, name='job-list'),
    path('job-list/<str:id_job_type>/',views.jobListFollowType, name='job-list-follow-type'),
    path('job-list-follow-position/<str:id_position>/',views.jobListFollowPosition, name='job-list-follow-position'),
    path('job-list-follow-company/<str:id_company>/', views.jobListFollowCompany, name='job-list-follow-company'),
    path('job-detail/<str:id_job>/',views.jobDetail, name='job-detail'),
    path('job-list-follow-searching/',views.SearchingJobAPI.as_view(), name='job-list-follow-searching'),
    path('companies-list/', views.companyList, name='companies-list'),
    path('company-detail/<str:id_company>', views.companyDetail, name='company-detail'),
    path('company-list-follow-searching/',views.SearchingCompanyAPI.as_view(), name='job-list-follow-searching'),
    path('user-create/', views.SignUserAccountAPI.as_view(), name='user-create'),
    path('user-login/', views.LoginApi.as_view(), name='user-login'),
    path('user-apply/',views.ProfileUserAPI.as_view(), name='user-apply'),
    # path('user-profile-list/',views.userProfileList, name='user-profile-list'),

]