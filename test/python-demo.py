# Python Demo - Token Scopes
# Use "Developer: Inspect TM Scopes" to see each scope

# ==============================================================================
# COMMENTS
# comment
# punctuation.definition.comment.py
# ==============================================================================

# Single line comment

"""
Multi-line string used as
multi-line comment
"""

'''
Single quote multi-line
comment
'''

# ==============================================================================
# KEYWORDS
# keyword.control.py
# keyword.operator.py
# storage.type.py
# ==============================================================================

# Control flow
if condition:
    pass
elif other_condition:
    pass
else:
    pass

for i in range(10):
    pass

while condition:
    pass

try:
    pass
except Exception as e:
    pass
finally:
    pass

with open('file.txt') as f:
    pass

# Match (Python 3.10+)
match value:
    case 'one':
        pass
    case 'two':
        pass
    case _:
        pass

# ==============================================================================
# CLASSES & FUNCTIONS
# entity.name.class.python
# entity.name.function.python
# meta.function.definition.python
# storage.type.python
# ==============================================================================

class ClassName:                  # entity.name.class.python
    """Docstring"""

    def __init__(self, name):    # entity.name.function.python
        self.name = name         # variable.parameter.python

    def method(self):            # entity.name.function.python
        pass

    @classmethod
    def classmethod(cls):        # entity.name.function.python
        pass

    @staticmethod
    def staticmethod():          # entity.name.function.python
        pass

    @property
    def prop(self):              # entity.name.function.python
        return self._prop

def function_name(param):        # entity.name.function.python
    """Docstring"""
    return param

async def async_function():      # entity.name.function.python
    await something
    return result

def generator():                  # entity.name.function.python
    yield 1
    yield 2

lambda x: x * 2                  # support.function.python

# ==============================================================================
# VARIABLES & ASSIGNMENT
# variable.otherAssignment.python
# variable.parameter.python
# ==============================================================================

# Simple assignment
variable = 10                     # variable.otherAssignment.python
name = "Python"

# Multiple assignment
a = b = c = 0

# Tuple unpacking
x, y, z = 1, 2, 3
(a, b) = (1, 2)
[x, y] = [1, 2]

# Extended unpacking
first, *middle, last = [1, 2, 3, 4, 5]
*rest, = iterable

# Walrus operator (:=)
if (n := len(data)) > 10:
    print(f"List has {n} elements")

# ==============================================================================
# NUMBERS
# constant.numeric.py
# constant.numeric.float.py
# constant.other.hex.py
# constant.other.bin.py
# constant.other.oct.py
# ==============================================================================

integer = 42
negative = -17
float_num = 3.14159              # constant.numeric.float.py
scientific = 2.5e10
hex_num = 0xFF                   # constant.other.hex.py
bin_num = 0b1010                 # constant.other.bin.py
oct_num = 0o777                  # constant.other.oct.py
big_int = 12345678901234567890

# Underscores in numbers
billion = 1_000_000_000
hex_with_underscores = 0x_FF_00_00

# ==============================================================================
# STRINGS
# string.quoted.py
# string.quoted.single.py
# string.quoted.double.py
# string.quoted.single.single.py
# string.quoted.double.double.py
# ==============================================================================

single = 'single quoted'
double = "double quoted"
triple_single = '''triple single
quoted string'''
triple_double = """triple double
quoted string"""

# Raw strings
raw = r"raw \n string"

# Bytes
b_bytes = b"byte string"
b_single = b'single bytes'
b_triple = b"""triple bytes"""

# f-strings
name = "Python"
f_string = f"Hello, {name}!"     # string.interpolated.py
f_expression = f"Result: {1 + 2}"
f_format = f"{name!r}"          # repr
f_format = f"{name:>10}"       # format spec

# ==============================================================================
# BOOLEANS & NONE
# constant.language.py
# constant.language.None.py
# constant.language.Python.py
# ==============================================================================

true_val = True                  # constant.language.Python.py
false_val = False
none_val = None                  # constant.language.None.py

# ==============================================================================
# COLLECTIONS - LIST
# meta.structure.list.python
# ==============================================================================

my_list = [1, 2, 3, 4, 5]       # meta.structure.list.python
mixed = [1, "two", 3.0, True, None]
nested = [[1, 2], [3, 4], [5, 6]]
empty = []
list_from = list((1, 2, 3))

# List comprehension
squares = [x**2 for x in range(10)]
filtered = [x for x in range(20) if x % 2 == 0]
nested_comp = [[x for x in range(3)] for _ in range(3)]

# ==============================================================================
# COLLECTIONS - TUPLE
# meta.structure.tuple.python
# ==============================================================================

my_tuple = (1, 2, 3, 4, 5)     # meta.structure.tuple.python
single_tuple = (42,)            # tuple with one element
mixed_tuple = (1, "two", 3.0)
nested_tuple = ((1, 2), (3, 4))
empty_tuple = ()

# Named tuple
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)

# ==============================================================================
# COLLECTIONS - DICT
# meta.structure.dictionary.python
# ==============================================================================

my_dict = {"key": "value"}      # meta.structure.dictionary.python
empty_dict = {}
nested_dict = {"a": {"b": {"c": 1}}}
dict_comprehension = {k: v for k, v in items}
dict_comp = {x: x**2 for x in range(5)}
dict_if = {k: v for k, v in d.items() if v > 0}

# ==============================================================================
# COLLECTIONS - SET
# meta.structure.set.python
# ==============================================================================

my_set = {1, 2, 3, 4, 5}        # meta.structure.set.python
empty_set = set()
set_comprehension = {x for x in range(10)}
frozenset_val = frozenset([1, 2, 3])

# ==============================================================================
# OPERATORS
# keyword.operator.arithmetic.py
# keyword.operator.bitwise.py
# keyword.operator.comparison.py
# keyword.operator.logical.py
# keyword.operator.assignment.py
# ==============================================================================

# Arithmetic
result = 10 + 5                  # keyword.operator.arithmetic.py
result = 10 - 3
result = 4 * 2
result = 20 / 4                 # keyword.operator.arithmetic.py
result = 17 // 5                # floor division
result = 17 % 5                 # modulo
result = 2 ** 3                 # power

# Comparison
is_equal = a == b                # keyword.operator.comparison.py
not_equal = a != b
greater = a > b
less = a < b
greater_eq = a >= b
less_eq = a <= b

# Logical
and_result = True and False       # keyword.operator.logical.py
or_result = True or False
not_result = not True

# Bitwise
bit_and = 5 & 3                 # keyword.operator.bitwise.py
bit_or = 5 | 3
bit_xor = 5 ^ 3
bit_not = ~5
left_shift = 1 << 2
right_shift = 8 >> 2

# Assignment
a = 10                          # keyword.operator.assignment.py
a += 5
a -= 3
a *= 2
a /= 4
a //= 7
a %= 7
a **= 2

# Identity
is_same = a is b                 # keyword.operator.identity.py
is_not = a is not b

# Membership
in_list = x in list              # keyword.operator.in.py
not_in = x not in list

# ==============================================================================
# BUILT-IN TYPES
# support.type.python
# support.class.python
# ==============================================================================

# Numeric types
int()
float()
complex()
bool()
numbers = int("42")
num_float = float("3.14")
is_bool = bool(1)

# String operations
str()
chr(65)                         # support.function.python
ord('A')

# Collection constructors
list()
tuple()
dict()
set()
frozenset()
bytes()
bytearray()

# Type checking
isinstance(42, int)
isinstance("str", str)
isinstance([1, 2], list)

# ==============================================================================
# BUILT-IN FUNCTIONS
# support.function.python
# ==============================================================================

# Input/Output
print("Hello")                  # support.function.python
input("Enter: ")
open("file.txt", "r")

# Math
abs(-5)                         # support.function.python
round(3.7)
floor(3.7)
ceil(3.2)
pow(2, 3)
divmod(17, 5)
min(1, 2, 3)
max(1, 2, 3)
sum([1, 2, 3])
len("hello")
sorted([3, 1, 2])
reversed([1, 2, 3])
any([True, False])
all([True, True])

# Type conversion
int("42")
float("3.14")
str(42)
list((1, 2, 3))
tuple([1, 2, 3])
set([1, 2, 2, 3])
dict([("a", 1), ("b", 2)])

# Iterators
range(10)
enumerate(["a", "b", "c"])
zip([1, 2, 3], ["a", "b", "c"])
map(str, [1, 2, 3])
filter(lambda x: x > 0, [-1, 0, 1, 2])
iter([1, 2, 3])
next(iter([1, 2]))
list(enumerate(["a", "b"]))
dict(zip(["a", "b"], [1, 2]))

# String functions
len("hello")
hex(255)
oct(255)
bin(255)
format(255, "08b")

# Object inspection
id(obj)
hash(obj)
type(42)
vars(obj)
dir(obj)
help(obj)
callable(obj)
hasattr(obj, "attr")
getattr(obj, "attr")
setattr(obj, "attr", value)
delattr(obj, "attr")
isinstance(obj, classinfo)

# ==============================================================================
# EXCEPTIONS
# support.type.exception.python
# ==============================================================================

# Built-in exceptions
ValueError                      # support.type.exception.python
TypeError
KeyError
IndexError
AttributeError
NameError
SyntaxError
RuntimeError
FileNotFoundError
ImportError
ModuleNotFoundError
ZeroDivisionError
StopIteration
StopAsyncIteration

# Raise exception
raise ValueError("message")     # keyword.operator.raises.python

# Exception chaining
raise ValueError("new") from exc

# ==============================================================================
# DECORATORS
# entity.name.decorator.python
# ==============================================================================

@decorator                      # entity.name.decorator.python
def func():
    pass

@classmethod
@staticmethod
@property
@dataclass
@abstractmethod
@functools.lru_cache
@wraps(func)
@decorator(arg)
async def async_func():
    pass

# ==============================================================================
# IMPORTS
# keyword.import.py
# entity.name.imported.python
# ==============================================================================

import os                         # keyword.import.py
import sys
import os.path
import pathlib
from os import path               # keyword.import.from.py
from pathlib import Path
from collections import defaultdict, namedtuple
import module as alias
from module import func as renamed_func
from module import *
from . import sibling              # relative import
from .. import parent             # relative import
from .module import name

# Importlib
import importlib
importlib.reload(module)
importlib.import_module("module")

# ==============================================================================
# ASYNC
# keyword.async.py
# keyword.await.pthon
# ==============================================================================

async def async_func():           # keyword.async.py
    await some_coroutine()        # keyword.await.pthon
    async for item in async_iterator:
        pass
    async with async_context_manager:
        pass

# ==============================================================================
# CLASS DECORATORS & SPECIAL METHODS
# entity.name.function.python
# ==============================================================================

class SpecialMethods:
    def __new__(cls, *args, **kwargs):
        return super().__new__(cls)

    def __init__(self):
        pass

    def __del__(self):
        pass

    def __repr__(self):
        return "SpecialMethods()"

    def __str__(self):
        return "string"

    def __bytes__(self):
        return b"bytes"

    def __hash__(self):
        return hash(self.name)

    def __eq__(self, other):
        return self.name == other.name

    def __lt__(self, other):
        return self.value < other.value

    # Numeric operators
    def __add__(self, other):
        return self.value + other.value

    def __sub__(self, other):
        return self.value - other.value

    def __mul__(self, other):
        return self.value * other.value

    def __truediv__(self, other):
        return self.value / other.value

    def __floordiv__(self, other):
        return self.value // other.value

    def __mod__(self, other):
        return self.value % other.value

    def __pow__(self, other):
        return self.value ** other.value

    # Bitwise operators
    def __and__(self, other):
        return self.value & other.value

    def __or__(self, other):
        return self.value | other.value

    def __xor__(self, other):
        return self.value ^ other.value

    def __invert__(self):
        return ~self.value

    def __lshift__(self, other):
        return self.value << other

    def __rshift__(self, other):
        return self.value >> other

    # Unary operators
    def __neg__(self):
        return -self.value

    def __pos__(self):
        return +self.value

    def __abs__(self):
        return abs(self.value)

    # Container methods
    def __len__(self):
        return len(self.items)

    def __getitem__(self, key):
        return self.items[key]

    def __setitem__(self, key, value):
        self.items[key] = value

    def __delitem__(self, key):
        del self.items[key]

    def __contains__(self, item):
        return item in self.items

    def __iter__(self):
        return iter(self.items)

    def __next__(self):
        return next(self.items)

    def __reversed__(self):
        return reversed(self.items)

    def __missing__(self, key):
        return default

    def __call__(self, *args, **kwargs):
        return "called"

    # Context manager
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

    # Async
    def __aiter__(self):
        return self

    def __anext__(self):
        return next(self.items)

# ==============================================================================
# TYPE HINTS (Python 3.5+)
# entity.name.type.python
# support.type.python
# ==============================================================================

# Basic types
def func(name: str) -> str:      # entity.name.type.python
    return name

# Multiple types
def func(x: int, y: float) -> float:
    pass

# Optional/Union
from typing import Optional, Union
def func(x: Optional[str]) -> Union[str, None]:
    pass

# Complex types
from typing import List, Dict, Tuple, Set, FrozenSet
def func(items: List[int]) -> Dict[str, int]:
    pass

def func(t: Tuple[int, str, float]) -> None:
    pass

# Type alias
Point = Tuple[float, float]

# Generic types
from typing import TypeVar, Generic
T = TypeVar('T')

class Container(Generic[T]):
    def __init__(self, item: T):
        self.item = item

# Protocol (structural subtyping)
from typing import Protocol
class Readable(Protocol):
    def read(self) -> str:
        ...

# TypedDict
from typing import TypedDict
class Point(TypedDict):
    x: int
    y: int

# NamedTuple
from typing import NamedTuple
class Point(NamedTuple):
    x: int
    y: int

# Callable
from typing import Callable
def func(callback: Callable[[int, int], str]) -> None:
    pass

# Any
from typing import Any
def func(x: Any) -> Any:
    pass

# NoReturn
from typing import NoReturn
def fail() -> NoReturn:
    raise RuntimeError("failed")

# ClassVar
from typing import ClassVar
class C:
    classvar: ClassVar[int] = 0

# Final
from typing import Final
PI: Final = 3.14159

# Literal
from typing import Literal
Mode = Literal["r", "w", "a"]

# Type guards
from typing import TypeGuard
def is_str_list(val: list) -> TypeGuard[list[str]]:
    return all(isinstance(x, str) for x in val)

# Self
from typing import Self
class C:
    def copy(self) -> Self:
        return self.__class__()

# TypeAlias
from typing import TypeAlias
MyList: TypeAlias = list[int]

# ==============================================================================
# TYPE HINTS - PEP 604 Union Syntax (Python 3.10+)
# ==============================================================================

def func(x: int | str | float) -> int | str:
    pass

# ==============================================================================
# PATTERN MATCHING (Python 3.10+)
# keyword.match.pystone
# entity.name.variable.pattern.py
# ==============================================================================

match point:                      # keyword.match.pystone
    case (0, 0):                 # entity.name.variable.pattern.py
        print("Origin")
    case (x, 0):
        print(f"On x-axis: {x}")
    case (0, y):
        print(f"On y-axis: {y}")
    case (x, y):
        print(f"Point: ({x}, {y})")
    case {"x": x, "y": y}:
        print(f"Dict: {x}, {y}")
    case [first, *rest]:
        print(f"First: {first}, rest: {rest}")

# ==============================================================================
# WALRUS OPERATOR (:=) - Python 3.8+
# ==============================================================================

if (n := len(data)) > 10:
    print(f"Too long: {n}")

# ==============================================================================
# F-STRINGS ADVANCED
# string.interpolated.py
# ==============================================================================

# Format specifiers
name = "Alice"
age = 30
f"{name:>10}"      # right align
f"{name:<10}"      # left align
f"{name:^10}"      # center
f"{age:05d}"       # zero pad int
f"{3.14159:.2f}"   # precision
f"{1e10:.2e}"       # scientific

# Conversions
f"{name!r}"        # repr
f"{name!s}"        # str
f"{name!a}"        # ascii

# Debug format
x = 42
f"{x=}"           # x=42
f"{x + 1=}"       # x + 1=43

# ==============================================================================
# CONTEXT MANAGERS
# ==============================================================================

# classic
with open('file.txt') as f:
    content = f.read()

# async
async with open('file.txt') as f:
    content = await f.read()

# multiple
with open('a.txt') as a, open('b.txt') as b:
    content = a.read() + b.read()

# ==============================================================================
# ELLIPSIS
# constant.language Ellipsis
# ==============================================================================

def placeholder():
    ...                          # constant.language Ellipsis

x = ...                          # Ellipsis object

# ==============================================================================
# PLACEHOLDER NAMES (unused variables)
# variable.language.positional
# ==============================================================================

for _ in range(10):
    print("Iteration")

x, _, z = (1, 2, 3)              # second value is unused

# ==============================================================================
# MAGIC METHODS & ATTRIBUTES
# support.function.magic
# support.variable.magic
# ==============================================================================

__name__                        # support.variable.magic
__doc__
__file__
__path__
__package__
__loader__
__spec__
__builtins__
__all__
__init__
__new__
__del__

__dict__
__class__
__bases__
__mro__
__subclasses__()

__repr__
__str__
__bytes__
__format__

__eq__
__ne__
__lt__
__le__
__gt__
__ge__
__hash__

__call__
__len__
__getitem__
__setitem__
__delitem__
__contains__
__iter__
__next__
__reversed__

__add__
__sub__
__mul__
__truediv__
__floordiv__
__mod__
__pow__
__and__
__or__
__xor__
__invert__
__lshift__
__rshift__

__enter__
__exit__
__aenter__
__aexit__

# ==============================================================================
# ANNOTATIONS (Decorator style)
# entity.name.decorator.python
# ==============================================================================

@overload
def process(x: int) -> int: ...

@overload
def process(x: str) -> str: ...

def process(x):
    return x

# ==============================================================================
# ENCODING & SOURCE
# meta.interpolation.py
# ==============================================================================

# -*- coding: utf-8 -*-

# ==============================================================================
# NONLOCAL & GLOBAL
# keyword.other.localname.py
# keyword.other.global.py
# ==============================================================================

def outer():
    x = "outer"

    def inner():
        nonlocal x             # keyword.other.localname.py
        x = "inner"

    def inner2():
        global y               # keyword.other.global.py
        y = "global"

# ==============================================================================
# ASSERT & RAISE
# keyword.operator.raises.pystone
# ==============================================================================

assert condition
assert condition, "message"

raise ValueError("message")
raise ValueError from cause

# ==============================================================================
# YIELD
# keyword.yield.pystone
# ==============================================================================

def gen():
    yield 1                     # keyword.yield.pystone
    yield from subgen()         # keyword.operator.continuation.pystone

# ==============================================================================
# LAMBDA
# support.function.lambda.python
# ==============================================================================

square = lambda x: x ** 2       # support.function.lambda.python
add = lambda x, y: x + y
sort_key = lambda item: item[1]
filter_fn = lambda x: x > 0

# ==============================================================================
# PASS
# keyword.pass.pystone
# ==============================================================================

def empty_func():
    pass                        # keyword.pass.pystone

class EmptyClass:
    pass

if condition:
    pass

# ==============================================================================
# BREAK & CONTINUE
# keyword.control.pystone
# ==============================================================================

for i in range(10):
    if i == 5:
        break                  # keyword.control.pystone
    if i % 2 == 0:
        continue               # keyword.control.pystone

# ==============================================================================
# DELETE
# keyword.operator.delete.pystone
# ==============================================================================

del variable                     # keyword.operator.delete.pystone
del list[0]
del dict["key"]
del obj.attr

# ==============================================================================
# IN, NOT IN, IS, IS NOT
# keyword.operator.in.pystone
# keyword.operator.identity.pystone
# ==============================================================================

x in list
x not in list
x is y
x is not y

# ==============================================================================
# BACKSLASH CONTINUATION
# meta.structure.single-line.pystone
# ==============================================================================

total = 1 + 2 + 3 + \
        4 + 5 + 6 + \
        7 + 8 + 9

# ==============================================================================
# DOCSTRING SCOPES
# string.docstring
# ==============================================================================

def func():
    """This is a docstring"""  # string.docstring
    pass

# ==============================================================================
# PYTHON 3.12+ - ERROR PRONE LITERALS
# ==============================================================================

# f-string '=' debug format
x = 42
f"{x=}"  # Python 3.8+
f"{x + 1=}"  # Python 3.8+

# ==============================================================================
# TYPE UNION SYNTAX (Python 3.10+)
# ==============================================================================

def func(x: int | str | None) -> int | None:
    pass

# ==============================================================================
# NEW MATCH SYNTAX (Python 3.10+)
# ==============================================================================

match value:
    case [x, y] if x == y:
        print("Equal pair")
    case {"key": v}:
        print(f"Dict with key: {v}")
    case int() as i:
        print(f"Integer: {i}")
