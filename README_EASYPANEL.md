Deploy rápido com EasyPanel + Traefik

Opções suportadas:
- Build direto no servidor usando o Dockerfile (EasyPanel consegue construir a partir do diretório do projeto)
- Build local e push da imagem para Docker Hub, depois configurar App no EasyPanel apontando para a imagem

1) Preparar: definir domínio apontando para sua VPS (A/AAAA)

Opção A — Build direto via EasyPanel (mais simples)
- No EasyPanel, crie um novo "Service / App" usando o arquivo `docker-compose.easypanel.yml` (ou adicione serviço manualmente):
  - Substitua `SEU_DOMINIO` no `docker-compose.easypanel.yml` pelo domínio real (ex.: `www.sualoja.com`).
  - Se o EasyPanel pedir o contexto de build, aponte para o diretório do repo onde está o `Dockerfile`.
  - Inicie o serviço. Traefik (do EasyPanel) deve expor a rota e já habilitar TLS (Let's Encrypt) automaticamente se estiver configurado.

Opção B — Build local e push para Docker Hub
# (1) Build local
```bash
# na raiz do projeto
docker build -t username/chic-bio-link:latest .
# faça login e envie
docker login
docker push username/chic-bio-link:latest
```
# (2) No EasyPanel
- Crie um novo App apontando para a imagem `username/chic-bio-link:latest`.
- Configure os labels de Traefik (Host = seu domínio). Se o painel suportar docker-compose, use `docker-compose.easypanel.yml`.

Dicas e verificações
- Se o EasyPanel usa Traefik com TLS automatizado, certifique-se de que o domínio aponta corretamente e que as portas 80/443 estão abertas no firewall da VPS.
- Logs: se algo der errado, verifique logs do container pelo EasyPanel ou `docker logs <container>`.
- Atualizações: ao fazer push de nova imagem, reinicie o serviço no EasyPanel ou habilite auto-update se disponível.

Se quiser, eu gero um script `deploy-easypanel.sh` que:
- faz build local
- dá tag com seu usuário
- faz push
- imprime os passos para criar o serviço no EasyPanel

Me diga qual opção prefere (A — build no servidor via EasyPanel, B — build local e push) e qual domínio usará (ou se quer usar sem domínio por enquanto).