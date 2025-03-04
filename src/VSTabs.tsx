import React from 'react';
import { Tabs, Tab, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface VSTabsProps {
  value: string;
  tabs: { label: string; value: string }[];
  onChange: (value: string) => void;
  onClose: (value: string) => void;
}

const VSTabs: React.FC<VSTabsProps> = ({ value, tabs, onChange, onClose }) => {
  return (
    <Tabs
      value={value}
      onChange={(e, newValue) => onChange(newValue)}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
       border: '1px solid #ccc',
        borderRadius: '4px 4px 0 0', // 只讓上方有圓角
        backgroundColor: 'inherit',
        borderBottom: 'none', // 移除最外層底部邊框，使下方內容可貼齊
        '& .MuiTabs-indicator': { display: 'none' },
        marginBottom: 0,            // 確保不與下方內容區留空隙
      }}
    >
      {tabs.map(tab => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <span>{tab.label}</span>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation(); // 避免觸發 Tab 切換
                  onClose(tab.value);
                }}
                sx={{ ml: 1, padding: 0, color: '#007acc' }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          }
          sx={{
            textTransform: 'none',
            minWidth: '10px',
            padding: '6px 12px',
            minHeight: '0px',
            border: '1px solid #ccc',
            borderRadius: '4px 4px 0 0', // 只讓上方圓角
          
            marginRight: '4px',
            '&.Mui-selected': {
              border: '2px solid #007acc',
              borderRadius: '4px 4px 0 0',
              borderBottom: 'none', // 選中時下邊框也不顯示
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default VSTabs;
