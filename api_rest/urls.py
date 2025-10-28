from django.contrib import admin
from django.urls import path,include

from api_rest import views

urlpatterns = [
    path('users/', views.get_users),
    path('user/', views.create_user),
    path('user/<str:nick>/', views.get_user_by_nick),
    path('user/<str:nick>/update/', views.update_user),
    path('user/<str:nick>/delete/', views.delete_user),
]