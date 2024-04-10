from django.views.decorators.http import require_http_methods
from django.shortcuts import render
from .models import Lei

# Create your views here.
def listar_leis(request):
    leis = Lei.objects.all()
    return render(request, 'legislacao/listar_leis.html', {'leis': leis})