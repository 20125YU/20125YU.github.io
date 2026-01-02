# 內容管理說明

這個資料夾用於管理部落格的所有內容，使用 YAML 格式儲存。

## 資料夾結構

- `diaries/` - 日記文章，每個 YAML 檔案對應一篇日記
- `images/` - 圖片管理，使用單一 `images.yaml` 檔案

## 日記格式

在 `diaries/` 資料夾中建立 YAML 檔案，例如 `2024-11-07.yaml`：

```yaml
id: "1"
title: "文章標題"
date: "2024年11月7日"
mood: "calm"  # 可選：happy, calm, inspired, melancholic
imageUrl: "/attached_assets/generated_images/image.png"  # 可選
excerpt: "文章摘要"
content: |
  # 文章標題
  
  文章內容可以使用 **Markdown** 語法撰寫。
  
  - 支援列表
  - 支援**粗體**和*斜體*
  - 支援程式碼區塊
  
  ```javascript
  console.log("Hello, World!");
  ```
```

## 圖片管理

編輯 `images/images.yaml`：

```yaml
images:
  - id: "1"
    title: "作品名稱"
    url: "/attached_assets/generated_images/image.png"
    date: "2024年11月"
    category: "水彩"  # 可選
    description: "作品描述"
```

**重要**：圖片路徑必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中。

## 生成內容

每次修改 YAML 檔案後，執行以下命令重新生成內容：

```bash
npm run content:generate
```

或者在開發時，內容會自動生成：

```bash
npm run dev
```

## Markdown 支援

所有 `content` 欄位都支援完整的 Markdown 語法：

- 標題（# ## ###）
- **粗體** 和 *斜體*
- 列表（有序和無序）
- 程式碼區塊和行內程式碼
- 引用
- 連結和圖片
- 表格（透過 GFM 擴展）

## 注意事項

1. 圖片檔案必須放在 `client/public/attached_assets/` 資料夾中
2. YAML 檔案中的圖片路徑必須以 `/attached_assets/` 開頭
3. 日期格式建議使用「年月日」格式，例如「2024年11月7日」
4. 每次修改內容後記得執行 `npm run content:generate` 或重新啟動開發伺服器
