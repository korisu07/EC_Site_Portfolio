FROM node:18.14.0

# 作業ディレクトリ
WORKDIR /var/www

# ロケールのインストールと設定
RUN apt-get update && apt-get install -y locales
RUN localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG="ja_JP.UTF-8" \
    LANGUAGE="ja_JP:ja" \
    LC_ALL="ja_JP.UTF-8"

# Vimインストール
RUN apt install -y vim

# create-next-appをインストール
RUN npm install -g npm@latest && npm install create-next-app