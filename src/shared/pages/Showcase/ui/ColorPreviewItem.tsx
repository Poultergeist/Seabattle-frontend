import { cn } from '@/shared/utils/cn';

import { previewVariants, type PreviewVariants } from './colorPreview.variants';

type PreviewProps = {
  className?: string;
  previewText?: string;
} & PreviewVariants;

export const ColorPreviewItem = ({
  className,
  previewText,
  color,
}: PreviewProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {previewText && <h2 className="text-center">{previewText}</h2>}
      <div className={cn(previewVariants({ color }), className)} />
    </div>
  );
};
