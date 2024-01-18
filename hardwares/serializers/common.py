from rest_framework.serializers import (ModelSerializer)
from ..models import Hardware

class HardwareSerializer(ModelSerializer):
  class Meta:
    model = Hardware
    fields = '__all__'