import type { StorefrontImageAsset } from '../../content/cafeContent';

type StorefrontImageProps = {
  asset: StorefrontImageAsset;
  className: string;
};

export function StorefrontImage({ asset, className }: StorefrontImageProps) {
  return (
    <picture className={className} style={{ aspectRatio: `${asset.width} / ${asset.height}` }}>
      <img
        alt={asset.alt}
        decoding="async"
        fetchPriority={asset.fetchPriority}
        height={asset.height}
        loading={asset.loading ?? 'lazy'}
        src={asset.src}
        style={asset.objectPosition ? { objectPosition: asset.objectPosition } : undefined}
        width={asset.width}
      />
    </picture>
  );
}
