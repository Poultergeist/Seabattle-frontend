import type { PreviewVariants } from './colorPreview.variants';
import { ColorPreviewItem } from './ColorPreviewItem';

const colors: (
  | { key: NonNullable<PreviewVariants['color']>; value: string }
  | { key: 'separator'; value?: string }
)[] = [
  { key: 'separator', value: 'Backgrounds' },
  { key: 'bg', value: 'Background' },
  { key: 'dark-bg', value: 'Dark bg' },
  { key: 'light-bg', value: 'Light bg' },
  { key: 'separator', value: 'Primary color pallete' },
  { key: 'primary', value: 'Primary' },
  { key: 'primary-dark', value: 'Primary dark' },
  { key: 'secondary', value: 'Secondary' },
  { key: 'secondary-dark', value: 'Secondary dark' },
  { key: 'accent', value: 'Accent' },
  { key: 'accent-dark', value: 'Accent dark' },
  { key: 'separator', value: 'Action color pallete' },
  { key: 'danger', value: 'Danger' },
  { key: 'danger-dark', value: 'Danger dark' },
  { key: 'warning', value: 'Warning' },
  { key: 'warning-dark', value: 'Warning dark' },
  { key: 'success', value: 'Success' },
  { key: 'success-dark', value: 'Success dark' },
  { key: 'info', value: 'Info' },
  { key: 'info-dark', value: 'Info dark' },
  { key: 'separator', value: 'Text colors' },
  { key: 'foreground', value: 'Foreground' },
  { key: 'muted-foreground', value: 'Muted foreground' },
  { key: 'separator', value: 'Gradients' },
  { key: 'gradient-primary-secondary', value: 'Primary Secondary' },
  { key: 'gradient-primary-accent', value: 'Primary Accent' },
  { key: 'gradient-secondary-accent', value: 'Secondary Accent' },
  { key: 'gradient-danger-warning', value: 'Danger Warning' },
];

export const ShowcasePage = () => {
  return (
    <>
      <h1>{'Preview page'}</h1>
      <div className="p-2">
        <h2>{'Colors'}</h2>
        <div className="flex flex-wrap items-end gap-2 rounded-md border-2 border-border p-2">
          {colors.map(color => (
            <>
              {color.key !== 'separator' && (
                <ColorPreviewItem
                  previewText={color.value}
                  color={color.key}
                  key={color.key}
                />
              )}
              {color.key === 'separator' && (
                <div className="my-5 w-full shrink-0 grow basis-full border-b-2 border-border">
                  {color.value && <h2>{color.value}</h2>}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};
