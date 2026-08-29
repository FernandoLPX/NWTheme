#!/bin/bash
# Shell Script Demo - Token Scopes

# ==============================================================================
# COMMENTS
# comment
# punctuation.definition.comment.shell
# ==============================================================================

# This is a comment

: <<'COMMENT'
This is a
multiline comment
COMMENT

# ==============================================================================
# KEYWORDS & CONTROL FLOW
# keyword.control.shell
# keyword.control.conditional.shell
# keyword.control.loop.shell
# ==============================================================================

if [ -z "$var" ]; then
    echo "Variable is empty"
elif [ "$var" = "test" ]; then
    echo "Variable is test"
else
    echo "Default case"
fi

case "$value" in
    one) echo "First" ;;
    two) echo "Second" ;;
    *) echo "Default" ;;
esac

for i in {1..5}; do
    echo "Index: $i"
done

while read -r line; do
    echo "$line"
done < file.txt

until [ "$count" -gt 10 ]; do
    ((count++))
done

select option in one two three; do
    echo "Selected: $option"
    break
done

# ==============================================================================
# SUBSTITUTIONS
# punctuation.definition.substitution.shell
# variable.other.normal.shell
# variable.other.special.shell
# ==============================================================================

echo "Current user: $USER"
echo "Home directory: ${HOME}"
echo "PID: $$"
echo "Exit code: $?"
echo "Script name: $0"
echo "All args: $@"
echo "Arg count: $#"

# Command substitution
CURRENT_DATE=$(date +%Y-%m-%d)
echo "Date: $CURRENT_DATE"

# Arithmetic substitution
RESULT=$((10 + 5))
echo "Result: $RESULT"

# ==============================================================================
# STRINGS
# string.quoted.double.shell
# string.quoted.single.shell
# string.unquoted.shell
# ==============================================================================

DOUBLE_QUOTED="This is a double-quoted string"
SINGLE_QUOTED='This is a single-quoted string $USER'
UNQUOTED=This_is_unquoted

echo "Double: $DOUBLE_QUOTED"
echo 'Single: $SINGLE_QUOTED'  # Variable won't expand
echo "Escaped: \"quotes\""

# Here-documents
cat <<'EOF'
This is a here document
Variables won't expand: $USER
EOF

cat <<EOF
This is a here document
Variables will expand: $USER
EOF

# ==============================================================================
# FUNCTIONS
# entity.name.function.shell
# meta.function.shell
# ==============================================================================

function my_function() {
    local arg1="$1"
    local arg2="$2"
    echo "Args: $arg1 $arg2"
    return 0
}

my_function "hello" "world"

# ==============================================================================
# BUILT-IN COMMANDS
# support.function.shell
# builtin.function.shell
# ==============================================================================

# File commands
ls -la
cd /tmp
pwd
mkdir -p new_dir
rm -rf new_dir
cp file1 file2
mv file2 file3
rm file3

# Text commands
echo "Hello"
printf "%s\n" "Formatted"
read -p "Enter: " var
cat file.txt
grep "pattern" file.txt
awk '{print $1}' file.txt
sed 's/old/new/g' file.txt

# System commands
export VAR=value
unset VAR
exit 0
source ./script.sh
. ./script.sh

# ==============================================================================
# VARIABLES & PARAMETERS
# variable.other.scalar.shell
# variable.other.array.shell
# variable.language.shell
# ==============================================================================

SCALAR="single value"
declare -a ARRAY=(one two three four)
declare -A ASSOCIATIVE=([key1]="value1" [key2]="value2")

echo "${ARRAY[0]}"
echo "${ARRAY[@]}"
echo "${!ASSOCIATIVE[@]}"
echo "${#ARRAY[@]}"

# ==============================================================================
# OPERATORS
# keyword.operator.shell
# ==============================================================================

# Arithmetic operators
a=$((10 + 5))   # Addition
b=$((10 - 3))   # Subtraction
c=$((4 * 2))    # Multiplication
d=$((20 / 4))   # Division
e=$((17 % 5))   # Modulo

# Comparison operators
[ "$a" -eq "$b" ]  # Equal
[ "$a" -ne "$b" ]  # Not equal
[ "$a" -gt "$b" ]  # Greater than
[ "$a" -lt "$b" ]  # Less than

# Logical operators
[ -z "$var" ] && echo "Empty"
[ -n "$var" ] || echo "Not empty"
[[ $var == "test" ]] && echo "Match"

# String operators
[[ "$str" == "pattern" ]]
[[ "$str" =~ ^regex$ ]]

# ==============================================================================
# REDIRECTION & PIPES
# keyword.operator.redirection.shell
# ==============================================================================

# Output redirection
echo "stdout" > output.txt
echo "stderr" 2> error.txt
echo "both" &> all.txt
echo "append" >> output.txt

# Input redirection
while read -r line; do
    echo "$line"
done < input.txt

# Pipes
cat file.txt | grep pattern | sort | uniq

# Here-string
grep pattern <<< "string to search"

# ==============================================================================
# TEST OPERATORS
# support.type.pseudo-terminal.shell
# ==============================================================================

# File tests
[ -e file.txt ]    # Exists
[ -f file.txt ]    # Regular file
[ -d dir ]          # Directory
[ -r file.txt ]     # Readable
[ -w file.txt ]     # Writable
[ -x file.txt ]     # Executable
[ -L file.txt ]     # Symbolic link
[ -s file.txt ]     # Non-empty

# String tests
[ -z "$str" ]       # Empty
[ -n "$str" ]       # Non-empty

# Numeric tests
[ "$a" -eq "$b" ]   # Equal
[ "$a" -ne "$b" ]   # Not equal
[ "$a" -gt "$b" ]   # Greater
[ "$a" -lt "$b" ]   # Less

# ==============================================================================
# EXPANSIONS
# meta.expansion.shell
# ==============================================================================

echo {1..5}           # Brace expansion
echo {a,b,c}          # Brace expansion
echo ~user            # Tilde expansion
echo $((2#101))       # Arithmetic base expansion

# Pattern matching
[[ "file.txt" == *.txt ]]
[[ "test" == t* ]]

# ==============================================================================
# ARRAYS
# meta.array.shell
# ==============================================================================

nums=(1 2 3 4 5)
echo "${nums[@]}"      # All elements
echo "${#nums[@]}"    # Array length
echo "${nums[0]}"      # First element
echo "${nums[@]:1:2}"  # Slice

# Associative arrays (bash 4+)
declare -A capitals
capitals[France]="Paris"
capitals[Japan]="Tokyo"
echo "${capitals[France]}"

# ==============================================================================
# SPECIAL CHARACTERS
# constant.character.escape.shell
# ==============================================================================

echo -e "Newline\nTab\t"
echo -e "Bell\a"
echo -e "Backspace\b"
echo -e "Return\r"
echo -e "Formfeed\f"
echo -e "Vertical tab\v"
echo -e "Backslash\\"
echo -e "Quote\""
echo -e "Dollar\$"
