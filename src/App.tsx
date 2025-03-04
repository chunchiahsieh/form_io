import React, { useState } from 'react';
import VSTabs from './VSTabs'; // 引入你剛剛建立的 VSTabs 元件
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import {
  Box,
  IconButton,
  createTheme,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

// 建立主題 (你可以根據需要調整)
const theme = createTheme({
  palette: {
    mode: 'light', // 主內容區域用亮色 (白底)
    primary: {
      main: '#007acc',
    },
  },
});

type TabItem = {
  path: string;
  label: string;
  Component: React.ComponentType;
};

// 動態載入 pages/components 下的 .tsx 檔案（排除 .test.tsx 與 .stories.tsx）
function importAll(r: any) {
  const pages: { path: string; Component: React.ComponentType }[] = [];
  r.keys().forEach((fileName: string) => {
    if (fileName.includes('.test.') || fileName.includes('.stories.')) return;
    let path = fileName.replace('./', '/').replace('.tsx', '');
    path = removeDuplicateSegment(path);
    const module = r(fileName);
    // 如果 default export 不存在，嘗試使用第一個 export
    const Component = module.default || module[Object.keys(module)[0]];
    pages.push({ path, Component });
  });
  return pages;
}

// 將重複的資料夾/檔案名稱濾掉，例如 '/Fromio/Fromio' 變成 '/Fromio'
function removeDuplicateSegment(routePath: string): string {
  const segments = routePath.split('/');
  const filtered = segments.filter(Boolean);
  if (filtered.length === 2 && filtered[0] === filtered[1]) {
    return '/' + filtered[0];
  }
  return routePath;
}

// 載入 pages/components 下所有頁面（包含子資料夾）
const pagesRoutes = importAll((require as any).context('./pages/components', true, /^(?!.*(\.test|\.stories)\.tsx$).*\.tsx$/));
console.log(pagesRoutes);

// 組合左側選單的項目，包括獨立的 Strapi 頁面與動態載入頁面
const menuItems = [
 // { path: '/strapi', label: 'Strapi 頁面', Component: Strapi },
  ...pagesRoutes.map(route => ({
    path: route.path,
    label: route.path.slice(1) + ' 頁面', // 移除前導斜線
    Component: route.Component,
  })),
];
const App: React.FC = () => {
  const [openTabs, setOpenTabs] = useState<TabItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>('');

  const handleMenuClick = (item: TabItem) => {
    const exists = openTabs.find(tab => tab.path === item.path);
    if (!exists) {
      setOpenTabs(prev => [...prev, item]);
    }
    setActiveTab(item.path);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleTabClose = (value: string) => {
    setOpenTabs(prev => prev.filter(tab => tab.path !== value));
    if (activeTab === value && openTabs.length > 1) {
      const remaining = openTabs.filter(tab => tab.path !== value);
      setActiveTab(remaining[0].path);
    } else if (openTabs.length === 1) {
      setActiveTab('');
    }
  };

  const [showRight, setShowRight] = useState<boolean>(true);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* 左側選單 */}
      <Box sx={{ width: 200,  p: 1, overflowY: 'auto' , border: '1px solid #ccc'}}>

         {/* 在左上方加上隱藏/顯示右側區域的按鈕 */}
         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <IconButton onClick={() => setShowRight(!showRight)} size="small">
              {showRight ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </Box>

      <SimpleTreeView>
        {menuItems.map(item => (
              <TreeItem
                key={item.path}
                itemId={item.path}
                label={item.label}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMenuClick(item);
                }}
              />
            ))}
        </SimpleTreeView>
      </Box>


      {/* 右側內容區 */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column',border: '0px solid #ccc', }}>
        <VSTabs
          value={activeTab}
          tabs={openTabs.map(tab => ({ label: tab.label, value: tab.path }))}
          onChange={handleTabChange}
          onClose={handleTabClose}
        />
      {/* 內容區，貼合在 Tabs 下方 */}
        <Box 
        sx={{
          flex: 1,
          p: 2,
          overflowY: 'auto',
          border: '1px solid #ccc',
          borderTop: 'none', // 移除上邊框，讓內容區與 Tabs 貼合
          marginTop: 0,
        }}
        >
          {openTabs.map(tab => (
            <Box
              key={tab.path}
              sx={{ display: tab.path === activeTab ? 'block' : 'none' }}
            >
              <tab.Component />
            </Box>
          ))}
          {openTabs.length === 0 && (
            <Box>

            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default App;
