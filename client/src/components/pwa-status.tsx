import React from 'react';
import { Wifi, WifiOff, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { usePWA } from '@/hooks/use-pwa';

export const PWAStatus: React.FC = () => {
  const { isInstalled, isOnline, needsUpdate, updateAvailable } = usePWA();

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
      {/* Online/Offline Status */}
      <Badge 
        variant={isOnline ? "default" : "destructive"}
        className="flex items-center gap-1.5"
      >
        {isOnline ? (
          <>
            <Wifi className="w-3 h-3" />
            Online
          </>
        ) : (
          <>
            <WifiOff className="w-3 h-3" />
            Offline
          </>
        )}
      </Badge>

      {/* PWA Install Status */}
      {isInstalled && (
        <Badge variant="secondary" className="flex items-center gap-1.5">
          <Smartphone className="w-3 h-3" />
          Installed
        </Badge>
      )}

      {/* Update Available */}
      {needsUpdate && (
        <Button
          size="sm"
          variant="outline"
          onClick={updateAvailable}
          className="flex items-center gap-1.5 text-xs"
        >
          <Download className="w-3 h-3" />
          Update
        </Button>
      )}
    </div>
  );
};

export default PWAStatus;