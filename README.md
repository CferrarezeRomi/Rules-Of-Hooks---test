# React – Rules of Hooks (exemplo prático)

Este exemplo mostra **por que hooks não podem ser condicionais** e como resolver corretamente.

---

## Regra principal

👉 **Hooks devem ser chamados sempre na mesma ordem e na mesma quantidade em todo render.**

---

## ❌ Exemplo quebrado (`BreakHook`)

```tsx
if (estado) {
  useEffect(() => {
    console.log('Broken!')
  }, [])
}
```

O hook só existe quando estado === true.

## O que acontece no React

```tsx
Previous render            Next render
---------------------------------------
1. useState                1. useState
2. (nada / undefined)      2. useEffect   ❌

```

➡️ A ordem/quantidade de hooks mudou
➡️ O React perde o controle interno
➡️ A aplicação quebra

---

## ✅ Exemplo correto (SafeHook)

```tsx
useEffect(() => {
  if (estado) {
    console.log('Changed state to true')
  }
}, [estado])
```

O hook sempre é chamado, a condição fica dentro dele.

## Comportamento correto

```tsx
Render 1: [useState, useEffect]
Render 2: [useState, useEffect] ✅
```

➡️ Ordem e quantidade permanecem iguais

---

## Regra de ouro

❌ Nunca:

Hooks dentro de if, for, while, switch

Hooks após return condicional

✅ Sempre:

Hooks no topo do componente

Lógica condicional dentro do hook
