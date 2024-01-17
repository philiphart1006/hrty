from django.urls import path
from .views import RegisterView, RUDView, EmployeeListView, CustomLoginView
from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView)

urlpatterns = [
  path('register/', RegisterView.as_view()),
  path('login/', CustomLoginView.as_view()),
  path('', EmployeeListView.as_view()),
  path('<int:pk>/', RUDView.as_view())
]