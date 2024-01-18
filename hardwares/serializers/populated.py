from .common import HardwareSerializer
from users.serializers.common import UserSerializer

class PopulatedHardwareSerializer(HardwareSerializer):
  users = UserSerializer(many=True)