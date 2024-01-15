from .common import SoftwareSerializer
from users.serializers.common import UserSerializer

class PopulatedSoftwareSerializer(SoftwareSerializer):
  users = UserSerializer(many=True)