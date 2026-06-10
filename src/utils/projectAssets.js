const imageModules = import.meta.glob("../assets/projects/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

export function projectAsset(filename) {
  const match = Object.entries(imageModules).find(([path]) =>
    path.endsWith(`/${filename}`),
  );
  return match ? match[1] : "";
}
