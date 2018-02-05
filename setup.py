from setuptools import setup, find_packages

VERSION = '0.0.1'


setup(
    name="mkdocs-imaterial",
    version=VERSION,
    url='',
    license='',
    description='',
    author='weiya',
    author_email='szcfweiya@gmail.com',
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'mkdocs.themes': [
            'imaterial = material',
        ]
    },
    zip_safe=False
)
