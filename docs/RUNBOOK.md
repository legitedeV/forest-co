# Runbook

## Deploy

```bash
cd infra
cp env.example .env
./scripts/deploy.sh
```

## Rollback

```bash
docker compose pull
# update to known-good tag, then
./scripts/deploy.sh
```

## Backup

```bash
cd infra
./scripts/backup.sh
```

## Restore

```bash
cd infra
./scripts/restore.sh /path/to/dump.sql
```

## Swap (4-8GB)

```bash
sudo fallocate -l 8G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
printf '/swapfile none swap sw 0 0\n' | sudo tee -a /etc/fstab
```

## Firewall (ufw)

```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```
