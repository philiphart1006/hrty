from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Hardware
from .serializers.common import HardwareSerializer
from .serializers.populated import PopulatedHardwareSerializer

# Create your views here.

# /softwares (GET, POST)
class HardwareListCreateView(ListCreateAPIView):
  queryset = Hardware.objects.all()
  serializer_class = HardwareSerializer
  

# /softwares/:pk/ (GET, PUT, PATCH, DELETE)
class HardwareDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Hardware.objects.all()
  # serializer_class = HardwareSerializer

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PopulatedHardwareSerializer
    return HardwareSerializer
