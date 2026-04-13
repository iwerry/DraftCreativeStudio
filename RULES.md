# Parâmetros e Regras do Site - Draft Creative Studio

## Regras de Tradução (i18n)
O sistema foi atualizado do antigo plugin de cookies do Google Tradutor para o pacote profissional `react-i18next`, garantindo integridade visual e de marca.

### ⚠️ Palavras Reservadas (Blocklist de Tradução)
As palavras abaixo são propriedades da marca e **NUNCA DEBEM SER TRADUZIDAS**, independentemente do idioma da página (Inglês, Espanhol, Francês). Elas devem permanecer 100% literais no código e em arquivos json:

- **Draft**
- **Draft Studio**
- **Draft Creative Studio**
- **Draft Lab** / **LAB** (quando se referir ao núcleo de tecnologia)
- **Draft Academy** / **ACADEMY** (quando se referir ao braço de ensino)
- **STUDIO** (quando se referir ao estúdio audiovisual)

## Estrutura
- **Dicionários:** Os arquivos que contêm todos os textos ficam em `src/locales/*.json`.
- **Lógica:** Componente `LanguageSwitcher.tsx` usa `useTranslation()` do pacote `react-i18next`.
- **Configuração:** `src/i18n.ts`.
