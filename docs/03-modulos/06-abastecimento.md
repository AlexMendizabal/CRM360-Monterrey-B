# Modulo: MTCorp Abastecimento (Abastecimiento)

## Ubicacion
```
src/Controller/MTCorp/Abastecimento/
├── Cadastros/
│   ├── MaterialAssociadoDepositoController.php
│   └── NivelEstoqueMaterialDepositoController.php
└── Estoque/
    └── EstoqueAnaliseComprasController.php
```

**Modulo pequeno con 3 controllers.**

---

## Controllers

### MaterialAssociadoDepositoController
- **Archivo:** `src/Controller/MTCorp/Abastecimento/Cadastros/MaterialAssociadoDepositoController.php`
- **Funcion:** Asociacion de materiales a depositos/almacenes
- **Operaciones:** Asignar materiales a depositos, listar asociaciones

### NivelEstoqueMaterialDepositoController
- **Archivo:** `src/Controller/MTCorp/Abastecimento/Cadastros/NivelEstoqueMaterialDepositoController.php`
- **Funcion:** Niveles de stock minimo/maximo por material y deposito
- **Operaciones:** Configurar niveles, consultar stock

### EstoqueAnaliseComprasController
- **Archivo:** `src/Controller/MTCorp/Abastecimento/Estoque/EstoqueAnaliseComprasController.php`
- **Funcion:** Analisis de compras basado en niveles de stock
- **Operaciones:** Generar analisis, sugerencias de compra

---

## Flujo de Negocio

```
Material ──asociado──> Deposito
     │
     └── Nivel de Stock (min/max)
              │
              └── Analisis de Compras
                    │
                    └── Sugerencia: "Comprar X unidades de Material Y para Deposito Z"
```

---

## Consideraciones para Migracion

- Modulo simple, migracion directa
- 3 models en Laravel: Material, Deposito, NivelStock
- Relacion many-to-many entre Material y Deposito
- Tabla pivot con niveles min/max
