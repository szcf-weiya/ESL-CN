from setuptools import setup, find_packages

VERSION = '0.0.1'

setup(
    name="mkdocs-yeti",
    version=VERSION,
    url='',
    license='',
    description='personal theme for ESLCN',
    author='weiya',
    author_email='szcfweiya@gmail.com',
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'mkdocs.themes': [
            'yeti = yeti',
        ]
    },
    zip_safe=False
)
