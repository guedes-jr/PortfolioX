from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

@api_view(['GET'])
def api_status(request):
    return Response({"message": "API está rodando com sucesso!"})

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = request.user
    user_data = {
        'id': user.id,
        'username': user.username,
        'email': user.email,
        # Adicione outros campos conforme necessário
    }
    return Response(user_data)