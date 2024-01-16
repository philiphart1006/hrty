from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Software
from .serializers.common import SoftwareSerializer
from .serializers.populated import PopulatedSoftwareSerializer

# Create your views here.

# /softwares (GET, POST)
class SoftwareListCreateView(ListCreateAPIView):
  queryset = Software.objects.all()
  serializer_class = SoftwareSerializer


  

# /softwares/:pk/ (GET, PUT, PATCH, DELETE)
class SoftwareDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Software.objects.all()
  # serializer_class = SoftwareSerializer

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PopulatedSoftwareSerializer
    return SoftwareSerializer
