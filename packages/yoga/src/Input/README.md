# How to add a new country to Yoga's Phone input component

## Critical rules (READ FIRST)

- Each country flag size MUST be exactly 20x20 pixels
- The flagsSprite image MUST maintain a square shape (3x3, 4x4, 5x5, etc.) — it may temporarily become a rectangle (e.g., 4x5) after adding a flag, but always prefer returning to a square when adding rows/columns
- All generated images MUST have transparent backgrounds
- NEVER override an existing flag file

---

## Step-by-step instructions

### Step 1: Find the country flag SVG

1.1. Look for the flag in `packages/icons/src/flags.ts`
1.2. Alternatively, search for files starting with `flag_` in `packages/icons/src/svg`
1.3. If the flag does not exist, STOP and inform the user

### Step 2: Convert the flag SVG to PNG

2.1. Run the following command (replace `COUNTRY` with the actual country name):

```bash
magick -background none -density 300 packages/icons/src/svg/flag_COUNTRY.svg -resize 20x20 flag_COUNTRY.png
```

2.2. Verify the output file `flag_COUNTRY.png` exists and is 20x20 pixels

### Step 3: Extract the current flagsSprite from code

3.1. Open `packages/yoga/src/Input/web/data-images.js`
3.2. Copy the base64 string from the `flagsSprite` constant (without the `data:image/png;base64,` prefix if present)
3.3. Convert base64 to PNG:

```bash
echo "data:image/png;base64,COPIED_BASE64" | magick input:- flagsSprite.png
```

### Step 4: Analyze the flagsSprite image

4.1. View the `flagsSprite.png` image to determine:

- Current dimensions (width × height)
- Number of rows: `height / 20`
- Number of columns: `width / 20`
- Whether there are blank spaces available

4.2. **Decision tree:**

```
IF blank spaces exist:
    → Proceed to Step 5 (no expansion needed)

ELSE IF image is square (rows == columns):
    → Add a new row OR column (your choice), then proceed to Step 5

ELSE IF rows > columns:
    → Add a new column, then proceed to Step 5

ELSE (columns > rows):
    → Add a new row, then proceed to Step 5
```

4.3. **Commands to expand the sprite:**

- Add a new row (20px below):

```bash
magick flagsSprite.png -background none -gravity North -extent "%[w]x%[fx:h+20]" flagsSprite.png
```

- Add a new column (20px to the right):

```bash
magick flagsSprite.png -background none -gravity West -extent "%[fx:w+20]x%[h]" flagsSprite.png
```

### Step 5: Insert the new flag into flagsSprite

5.1. Determine the position for the new flag (X, Y offsets must be multiples of 20)

5.2. Choose the appropriate command based on where blank space is:

- Insert flag at bottom-left area (filling rows left-to-right):

```bash
magick flagsSprite.png flag_COUNTRY.png -gravity SouthWest -geometry +X+Y -composite flagsSprite.png
```

- Insert flag at top-right area (filling columns top-to-bottom):

```bash
magick flagsSprite.png flag_COUNTRY.png -gravity NorthEast -geometry +X+Y -composite flagsSprite.png
```

5.3. View the updated `flagsSprite.png` to verify the flag was placed correctly

### Step 6: Update the codebase

6.1. **Convert the updated sprite to base64:**

```bash
magick flagsSprite.png PNG:- | base64
```

6.2. **Edit `packages/yoga/src/Input/web/data-images.js`:**

- Replace the `flagsSprite` constant value with the new base64 string

6.3. **Edit `packages/yoga/src/Input/web/Phone.style.js`:**

- Add a new entry to `flagsPositioning` for the new country
- The position values correspond to the X, Y pixel offset of the flag in the sprite

6.4. **Edit `packages/yoga/src/Input/web/Phone.jsx`:**

- Add the new country to the `phoneBaseSettings` constant
- Include: country code, dial code, flag position reference, and any other required fields

### Step 7: Validate changes

7.1. Run the project tests:

```bash
npm test
```

7.2. Fix any failing tests related to your changes

7.3. Manually verify the component renders the new country flag correctly (if possible)

---

## Quick reference: Geometry calculations

| Sprite size | Rows | Columns | Total flags | Next position (if filling bottom row, left-to-right) |
| ----------- | ---- | ------- | ----------- | ---------------------------------------------------- |
| 60x60       | 3    | 3       | 9           | +0+0 to +40+40 (multiples of 20)                     |
| 80x80       | 4    | 4       | 16          | +0+0 to +60+60                                       |
| 100x100     | 5    | 5       | 25          | +0+0 to +80+80                                       |

**Offset formula:** For a flag at grid position (col, row) where 0-indexed:

- X offset = `col * 20`
- Y offset = `row * 20`
