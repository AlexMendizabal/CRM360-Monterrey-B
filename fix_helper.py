import re
import sys

# Path to the file
filepath = r'c:\Proyectos\CRM360-Monterrey-B\src\Services\Helper.php'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix $res > 0 where $res is fetchAssociative()
# Example: 
# $res = $result_stmt->fetchAssociative();
# if ($res > 0) {
content = re.sub(
    r'(\$\w+\s*=\s*\$[^>]+->fetchAssociative\(\)\s*;\s*if\s*\(\s*)(\$\w+)(\s*>\s*0\s*\))',
    r'\1\2\3',  # Wait, let's just do targeted replacements
    content
)

# Actually, I'll just write targeted replacements because they are varied.
replacements = [
    (
        '$res = $result_stmt->fetchAssociative();\n        if ($res > 0) {',
        '$res = $result_stmt->fetchAssociative();\n        if ($res && !empty($res)) {'
    ),
    (
        '$id_unidad = $result_stament->fetchAssociative();\n        if ($id_unidad > 0) {',
        '$id_unidad = $result_stament->fetchAssociative();\n        if ($id_unidad && !empty($id_unidad)) {'
    ),
    (
        '$id_vendedor = $result_stament->fetchAssociative();\n        if ($id_vendedor > 0) {',
        '$id_vendedor = $result_stament->fetchAssociative();\n        if ($id_vendedor && !empty($id_vendedor)) {'
    ),
    (
        '$resp = $connection->executeQuery("select top 1 id from tb_escr where id_situ like \'{$id_situ}\'")->fetchAssociative();\n        $id = $resp[\'id\'];\n        if ($id >= 0) {',
        '$resp = $connection->executeQuery("select top 1 id from tb_escr where id_situ like \'{$id_situ}\'")->fetchAssociative();\n        if ($resp && isset($resp[\'id\'])) {\n            $id = $resp[\'id\'];'
    ),
    (
        '$resp = $connection->executeQuery("SELECT top 1 id FROM tb_tipo_Alamacen WHERE nombre like \'{$tipo}\'")->fetchAssociative();\n        $id = $resp[\'id\'];\n        if ($id >= 0) {',
        '$resp = $connection->executeQuery("SELECT top 1 id FROM tb_tipo_Alamacen WHERE nombre like \'{$tipo}\'")->fetchAssociative();\n        if ($resp && isset($resp[\'id\'])) {\n            $id = $resp[\'id\'];'
    ),
    (
        '$resp = $connection->executeQuery("SELECT top 1 id_region FROM tb_region WHERE nombre_region LIKE \'{$region}\'")->fetchAssociative();\n        $id_region = $resp[\'id_region\'];\n        if ($id_region >= 0) {',
        '$resp = $connection->executeQuery("SELECT top 1 id_region FROM tb_region WHERE nombre_region LIKE \'{$region}\'")->fetchAssociative();\n        if ($resp && isset($resp[\'id_region\'])) {\n            $id_region = $resp[\'id_region\'];'
    ),
    (
        '$resp = $connection->executeQuery("SELECT top 1 id_zona FROM tb_zona WHERE nombre_zona LIKE \'{$zona}\'")->fetchAssociative();\n        $id_zona = $resp[\'id_zona\'];\n        if ($id_zona >= 0) {',
        '$resp = $connection->executeQuery("SELECT top 1 id_zona FROM tb_zona WHERE nombre_zona LIKE \'{$zona}\'")->fetchAssociative();\n        if ($resp && isset($resp[\'id_zona\'])) {\n            $id_zona = $resp[\'id_zona\'];'
    )
]

for old, new in replacements:
    content = content.replace(old, new)


with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replacements done in Helper.php")
