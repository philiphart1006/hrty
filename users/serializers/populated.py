from rest_framework import serializers
from .common import UserSerializer, ReducedUserSerializer
from softwares.serializers.common import SoftwareSerializer
from teams.serializers.common import TeamSerializer
from reviews.serializers.common import ReviewSerializer
from hardwares.serializers.common import HardwareSerializer

class PopulatedUserSerializer(UserSerializer):
  manager = UserSerializer()
  team = TeamSerializer()

class ExtraPopulatedUserSerializer(UserSerializer):
  manager = ReducedUserSerializer()
  softwares = SoftwareSerializer(many=True)
  hardwares = HardwareSerializer(many=True)
  team = TeamSerializer()
  reviews_received = ReviewSerializer(many=True)