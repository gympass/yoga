const border = [0, 2, 4, 8];

border.zero = border[0];
border.small = border[1];
border.medium = border[2];
border.large = border[3];

const radii = [0, 8, '100%'];

radii.sharp = radii[0];
radii.rounded = radii[1];
radii.circle = radii[2];

export default { border, radii };
