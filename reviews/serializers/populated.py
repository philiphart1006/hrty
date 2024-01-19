from .common import ReviewSerializer
from users.serializers.common import ReducedUserSerializer

class PopulatedReviewSerializer(ReviewSerializer):
  employee = ReducedUserSerializer()
  owner = ReducedUserSerializer()