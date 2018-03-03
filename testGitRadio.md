# GitRadio

## json error

Solved! (forget to remove `payload=` before `json.loads()`)

## %7B character

参考https://stackoverflow.com/questions/11768070/transform-url-string-into-normal-string-in-python-20-to-space-etc

1. python2

```python
import urllib2
print urllib2.unquote("%CE%B1%CE%BB%20")
```

2. python3

```python
from urllib.parse import unquote
print(unquote("%CE%B1%CE%BB%20"))
```

## test multi-commits
