from django.conf.urls import url
from django.contrib import admin
from portfolio import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^contact/', views.contact, name="contact"),
    url(r'^about/', views.about, name="about"),
    url(r'^gallery/', views.gallery, name="gallery"),
    url(r'^admin/', admin.site.urls),
]
