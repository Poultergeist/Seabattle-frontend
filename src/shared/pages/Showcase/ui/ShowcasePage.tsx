import type { PreviewVariants } from './colorPreview.variants';
import { ColorPreviewItem } from './ColorPreviewItem';

const colors: { key: NonNullable<PreviewVariants['color']>; value: string }[] =
  [
    { key: 'bg', value: 'Background' },
    { key: 'dark-bg', value: 'Dark bg' },
    { key: 'light-bg', value: 'Light bg' },
    { key: 'primary', value: 'Primary' },
    { key: 'primary-dark', value: 'Primary dark' },
    { key: 'secondary', value: 'Secondary' },
    { key: 'secondary-dark', value: 'Secondary dark' },
    { key: 'accent', value: 'Accent' },
    { key: 'accent-dark', value: 'Accent dark' },
    { key: 'danger', value: 'Danger' },
    { key: 'danger-dark', value: 'Danger dark' },
    { key: 'warning', value: 'Warning' },
    { key: 'warning-dark', value: 'Warning dark' },
    { key: 'success', value: 'Success' },
    { key: 'success-dark', value: 'Success dark' },
    { key: 'info', value: 'Info' },
    { key: 'info-dark', value: 'Info dark' },
    { key: 'foreground', value: 'Foreground' },
    { key: 'muted-foreground', value: 'Muted foreground' },
  ];

export const ShowcasePage = () => {
  return (
    <>
      <h1>{'Preview page'}</h1>
      <div>
        <h2>{'Colors'}</h2>
        <div className="flex gap-2">
          {colors.map(color => (
            <ColorPreviewItem
              previewText={color.value}
              color={color.key}
              key={color.key}
            />
          ))}
        </div>
      </div>
    </>
  );
};
