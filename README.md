# Apadrinhe um Idoso neste Natal 🎄

Landing page simples para a campanha de Natal 2026, baseada na arte recebida.

## Executar

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para validar produção: `npm run build`.

## WhatsApp da organização

O contato da responsável Daiane Araújo está configurado em `app/page.tsx` como `5511993023322`. O botão de adoção abre o WhatsApp com mensagem personalizada para cada idoso.

## Atualizar adoções

Em `data/idosos.ts`, mude `adotado: false` para `adotado: true` no idoso correspondente. As mudanças aparecem depois do próximo deploy. **A adoção NÃO é automática:** a responsável precisa confirmar por WhatsApp e vocês precisam atualizar o código manualmente.

## Adicionar idosos

Adicione uma foto em `public/idosos/` e um objeto em `data/idosos.ts`. Use imagens autorizadas para publicação.

## Publicar

Crie um repositório no GitHub, faça o push e importe o repositório na Vercel. O framework Next.js será identificado automaticamente. Depois de publicar, gere um QR Code apontando para a URL definitiva.

## Atenção

- As cinco fotos originais recebidas foram incluídas sem edição ou retoque. Confirme a autorização para publicação das imagens.
- Todos os idosos foram marcados inicialmente como **disponíveis apenas como configuração provisória**, pois a arte não informa o status real. Confirme os status antes de divulgar.
- Confirme a autorização da responsável para divulgar o número de WhatsApp.
- O site não coleta dados pessoais de adotantes e não tem painel administrativo.
