from django.urls import path
from . import views

urlpatterns = [
    path('compose', views.compose, name='compose')
]