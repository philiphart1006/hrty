from .serializers.common import ReviewSerializer
from .serializers.populated import PopulatedReviewSerializer
from rest_framework.generics import ListCreateAPIView, DestroyAPIView
from .models import Review
from lib.views import OwnerListCreateView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.

# Path /reviews/
# Methods: GET, POST
class ReviewCreateListView(ListCreateAPIView):
  queryset = Review.objects.all()
  # serializer_class = ReviewSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return PopulatedReviewSerializer
    return ReviewSerializer

# Path /reviews/:pk/
# Methods: DELETE
class ReviewDestroyView(DestroyAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer
