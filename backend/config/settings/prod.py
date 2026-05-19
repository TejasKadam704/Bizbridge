from .base import *
import dj_database_url

DEBUG = False

# Make sure ALLOWED_HOSTS uses the environment variable provided by Render.
# If not provided, fallback to an empty string to prevent access.
ALLOWED_HOSTS = env_config('ALLOWED_HOSTS', default='').split(',')

# Add Whitenoise to middleware for static file serving.
# It should be placed right after the SecurityMiddleware.
MIDDLEWARE.insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')

# Use dj_database_url to parse the DATABASE_URL environment variable.
DATABASES = {
    'default': dj_database_url.config(
        default=env_config('DATABASE_URL'),
        conn_max_age=600,
        conn_health_checks=True,
    )
}

# Update CORS settings to allow frontend URL.
FRONTEND_URL = env_config('FRONTEND_URL', default='')
if FRONTEND_URL:
    CORS_ALLOWED_ORIGINS.append(FRONTEND_URL)
else:
    # If not specifically set, allow all in prod as a fallback if needed,
    # but generally it's better to strictly set FRONTEND_URL.
    pass

# Whitenoise settings for static files
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
