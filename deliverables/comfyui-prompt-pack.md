# Logic Sonata redesign: ComfyUI prompt pack

Imagery for the cyberpunk redesign of www.logicsonata.com (see `docs/REDESIGN-CHECKPOINT.md` in the website repo).
36 stills (Flux.1 dev or Flux.1 Krea dev) and 8 video clips (Wan 2.2 14B). Every prompt below is complete and
copy-ready: scene, camera, lens, angle and lighting are already written in.

## 1. How to run it

### Workflow order

1. **Test batch first.** Generate HOME-01, HOME-02, CITY-SG and PROD-KA-WIDE, upload them, and I will check the look
   and consistency before you spend time on the rest.
2. **Stills.** Generate all 36 stills, pick the best take of each, upscale.
3. **Videos.** Most clips start from an approved still (image-to-video), so they always come last.
4. **Grading is on me.** I grade everything into one red/cyan look afterwards, so colours only need to be close.

### Flux settings (stills)

| Setting | Flux.1 dev | Flux.1 Krea dev |
| --- | --- | --- |
| Base resolution | 1536 x 864 (16:9) | 1536 x 864 (16:9) |
| Steps | 25 to 30 | 28 to 32 |
| Guidance (FluxGuidance node) | 2.5 to 3.0 for photographic realism, 3.5 for stricter prompt following | about 4.5 (model card default) |
| Sampler / scheduler | euler / simple or beta | euler / simple or beta |
| Negative prompt | not used by Flux | not used by Flux |
| Upscale | 2x to 3072 x 1728 (4x-UltraSharp or Ultimate SD Upscale at denoise 0.2 to 0.3) | same |

- Keep the main subject roughly central: I cut a square phone crop from the middle of every wide image.
- Flux has no negative prompt. If text, logos or warped hands appear, change the seed or inpaint that area.
- Once a take is approved, note its seed. Reuse it for any variant of the same shot.

### Wan 2.2 settings (video)

| Setting | Value |
| --- | --- |
| Model | Wan 2.2 I2V-A14B (image-to-video); First-Last-Frame workflow where noted |
| Resolution | 1280 x 720 |
| Length | 81 frames at 16 fps (about 5 seconds) |
| After render | 2x frame interpolation (RIFE or FILM) to 32 fps, then upscale to 1920 x 1080 if needed |
| Loops | First-Last-Frame workflow with the same still as both first and last frame, static camera |

Negative prompt for every Wan clip (paste as is):

```
overexposed, oversaturated, bright daylight, text, subtitles, captions, watermark, logo, low quality, blurry details, jpeg artifacts, deformed hands, extra fingers, distorted faces, morphing objects, melting shapes, flickering, sudden cuts, camera shake, cartoon, illustration
```

For image-to-video, the still already defines the scene. The video prompts therefore describe motion, camera move
and light changes only.

### File delivery

- Upload stills to `photos-incoming/` and videos to `video-incoming/` in github.com/philip719/monsters-rolodex
  (Add file, Upload files; max 25 MB per file).
- Use the file names given below. PNG or JPG at quality 95 for stills, MP4 for videos.

### Content rules

- No readable text, logos or real brands in any frame.
- People are generated, so no consent forms are needed, but reroll any face that resembles a real, known person.
- Check hands, eyes and teeth at 100% zoom before approving a take.

---

## 2. Stills: homepage (5)

### HOME-01 · `home-hero.png`
- **Use:** homepage hero, full-bleed, desktop and square phone crop. Also the first frame of VID-02.
- **Method:** image-to-image from `public/images/hero-render@2x.webp` (website repo) at denoise 0.35 to 0.45. This
  keeps the part layout, so the existing part labels still line up. Use text-to-image only if you want a new layout.
- **Camera:** 50mm, f/5.6, three-quarter front view, camera slightly above the object (about 15 degrees down).
- **Lighting:** low-key; red rim light back left, cyan rim light back right, soft overhead fill, haze, wet floor.

```
An exploded view of a compact private AI server appliance: brushed aluminium chassis panels, slotted front grilles, a cooling fan, a copper heat-pipe fin stack, a black mainboard with one large AI superchip, memory modules and an NVMe drive, all floating in precise evenly spaced layers above a wet black reflective floor in a dark industrial space. Three-quarter front view from slightly above, 50mm lens at f/5.6, every part in crisp focus. Low-key lighting: a signal-red rim light from behind on the left, an acid-cyan rim light from behind on the right, a soft overhead fill, thin haze catching the light beams, mirror-like reflections on the wet floor. Centered subject with generous dark space around it. Cinematic editorial product photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, gentle halation on highlights, photorealistic materials, no readable text or logos.
```

### HOME-02 · `home-intro.png`
- **Use:** backdrop behind the introduction statement. Start frame of VID-04.
- **Camera:** 24mm, f/2.8, eye level from the back of the room, one-point perspective toward the window.
- **Lighting:** room unlit; the city outside is the only light source; rain on the glass.

```
An empty executive office at night on a high floor above a dense Southeast Asian city, floor-to-ceiling windows filling the frame, rain streaks running down the glass, a long dark desk with a closed laptop in the foreground, the city below glowing through the rain. Shot from the back of the room at eye level with a 24mm lens at f/2.8, one-point perspective toward the window, the left third of the frame calm and dark. The room itself is unlit: soft cyan glow from distant signage and red tail lights from the streets below spill across the desk and ceiling, out-of-focus bokeh on the wet glass. Cinematic editorial photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, gentle halation, photorealistic, no readable text or logos.
```

### HOME-03 · `home-control-room.png`
- **Use:** stats readout band backdrop. Start frame of VID-06.
- **Camera:** 35mm, f/2, low angle from behind the last row of desks.
- **Lighting:** screens are the key light (cyan); one red alert accent; light haze.

```
A network operations control room in near darkness, a curved wall of large screens showing abstract data visualisations, network maps and graphs in cyan with a few red alert markers, rows of desks with monitors in front of it, a single operator seen from behind as a dark silhouette. Low camera angle from behind the last row of desks, 35mm lens at f/2, focus on the screen wall, foreground desks softly out of focus. The screens are the only key light, casting cyan light across the room, a red alert beacon adds a thin red accent on the ceiling, light haze makes the screen glow visible in the air. Cinematic editorial photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### HOME-04 · `home-cta-boardroom.png`
- **Use:** closing call-to-action band.
- **Camera:** 85mm, f/1.8, eye level, shot through the glass wall of the boardroom.
- **Lighting:** cool pendant light over the table, red city glow from the window behind.

```
A small leadership team of four Southeast Asian business professionals in sharp dark business clothing gathered around a glass boardroom table at night, looking together at a glowing tablet, seen mostly in profile and from behind. Shot from outside the room through its glass wall with an 85mm lens at f/1.8 at eye level, faint reflections on the glass in the foreground, shallow depth of field. A cool cyan-white pendant light above the table lights their hands and faces softly, the city behind the window glows deep red and teal, the rest of the room falls into darkness. Cinematic editorial photograph, confident and calm, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic skin and fabrics, no readable text or logos.
```

### HOME-05 · `home-datacentre-aisle.png`
- **Use:** advantages / data sovereignty section. Start frame of VID-05.
- **Camera:** 24mm, f/4, waist height, centred one-point perspective down the aisle.
- **Lighting:** cyan LED strips at floor level, one red warning beacon at the far end, haze.

```
A long data centre aisle between two rows of black server racks with perforated doors, thousands of tiny status LEDs glowing, overhead cable trays, raised floor tiles with a polished wet-look sheen. Centred one-point perspective straight down the aisle from waist height, 24mm lens at f/4, deep focus to the far end. Cyan LED strips along the base of the racks light the floor, a single red warning beacon glows at the far end of the aisle, thin haze hangs in the air and catches the light, reflections run along the floor. Cinematic editorial photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

---

## 3. Stills: markets carousel (6)

AI-generated landmarks can drift. Reroll any take where a landmark looks wrong.

### CITY-SG · `city-singapore.png`
- **Camera:** 35mm, f/8, tripod long exposure, eye level from the waterfront promenade.
- **Lighting:** just after blue hour, after rain; low clouds glowing from below.

```
Singapore's Marina Bay skyline at night just after rain, the financial district towers and Marina Bay Sands reflected in the still water of the bay. Shot from the waterfront promenade at eye level with a 35mm lens at f/8, long exposure on a tripod so the water is glassy smooth, wet paving in the foreground. Low clouds glow from the city lights below, the skyline lights lean toward acid cyan with scattered signal-red accents, the sky a deep teal-black. Cinematic night photograph, dystopian near-future mood, subtle film grain, gentle halation around lights, photorealistic, no readable text or logos.
```

### CITY-KL · `city-kuala-lumpur.png`
- **Camera:** 70mm telephoto, f/8, slightly elevated from a rooftop, compressed perspective.
- **Lighting:** night mist, towers lit cool white and cyan, red aircraft warning lights.

```
Kuala Lumpur at night, the Petronas Twin Towers rising above a dense field of skyscrapers, light mist drifting between the buildings. Shot from a nearby rooftop with a 70mm telephoto lens at f/8, slightly elevated, compressed perspective stacking the city layers. The towers glow cool white and cyan, red aircraft warning lights blink on the rooftops, the mist softly diffuses the city glow into a teal haze. Cinematic night photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### CITY-JKT · `city-jakarta.png`
- **Camera:** 24mm, f/11, long exposure from a pedestrian bridge, high angle down the avenue.
- **Lighting:** traffic light trails (red tail lights, white-cyan headlights), glass towers lit from inside.

```
Jakarta's central business district at night, a wide multi-lane avenue running between tall glass office towers, traffic turned into long streaks of red tail lights and cyan-white headlights. Shot from a pedestrian bridge at a high angle looking down the avenue, 24mm lens at f/11, long exposure on a tripod, deep focus. The towers glow from their lit floors, wet asphalt reflects the light trails, a faint haze softens the far end. Cinematic night photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### CITY-BKK · `city-bangkok.png`
- **Camera:** 35mm, f/2, low angle from street level looking up at the elevated rail line.
- **Lighting:** neon signage bokeh, wet street reflections, a passing train lit from inside.

```
Bangkok at night, an elevated skytrain track curving overhead between towers, a lit train passing above, a wet street below with taxis and a tuk-tuk. Low angle from street level looking up, 35mm lens at f/2, the track and train in focus, signage dissolved into soft out-of-focus bokeh. Neon glow in acid cyan and signal red reflects on the wet road and the underside of the track, light rain visible against the lights. Cinematic night street photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, gentle halation, photorealistic, no readable text or logos.
```

### CITY-HCMC · `city-ho-chi-minh.png`
- **Camera:** 50mm, f/8, long exposure from a bridge, eye level across the river.
- **Lighting:** skyline reflected in the river, motorbike light trails on the riverside road.

```
Ho Chi Minh City at night, the Saigon River in the foreground with the Landmark 81 skyscraper and the downtown skyline beyond, a riverside road full of motorbike light trails. Shot from a bridge across the river at eye level, 50mm lens at f/8, long exposure on a tripod, the river surface smooth and reflective. The skyline glows cyan and white with signal-red accents, red and white light trails trace the road, a light haze sits over the water. Cinematic night photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### CITY-SZ · `city-shenzhen.png`
- **Camera:** 85mm telephoto, f/8, from a hillside park, strong compression.
- **Lighting:** LED facade light patterns across many towers, cyan and red only.

```
Shenzhen's Futian skyline at night seen from a hillside park, the Ping An Finance Centre tower rising above a wall of skyscrapers whose facades are covered in synchronized LED light patterns of abstract lines and gradients. Shot with an 85mm telephoto lens at f/8, strong compression, slightly elevated viewpoint, deep focus. The LED facades glow in acid cyan with sweeps of signal red, the sky deep teal-black with low glowing clouds, light haze between the towers. Cinematic night photograph, dystopian near-future mood, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text, no characters or logos on the facades.
```

---

## 4. Stills: hardware and scroll story (5)

### HW-01 · `hw-chip-wafer.png`
- **Use:** "Specificity" section and the start frame of VID-01 (scroll story, shot 1).
- **Camera:** 100mm macro, f/8 (focus-stacked look), low raking angle of about 20 degrees.
- **Lighting:** one hard raking light from the left (cyan), red bounce from the right, pure black background.

```
Extreme macro photograph of a bare silicon wafer covered in a grid of microchip dies, the surface showing iridescent interference colours that shift from acid cyan to deep signal red across the dies. Low raking camera angle of about 20 degrees across the surface, 100mm macro lens at f/8, focus-stacked so the near dies are razor sharp and the far edge softly falls off. A single hard raking light from the left in cyan reveals the fine circuit structures, a red bounce light from the right adds colour to the edges, pure black background. Cinematic scientific macro photography, dystopian near-future mood, subtle film grain, photorealistic, no readable text or logos.
```

### HW-02 · `hw-superchip.png`
- **Use:** product cards, appliance detail section.
- **Camera:** 100mm macro, f/5.6, 45 degree high angle, focus on the die edge.
- **Lighting:** soft cyan-white overhead box, red rim light from behind, light haze.

```
Close-up of a large AI processor package with an exposed mirror-like die mounted on a black mainboard, surrounded by memory modules, power stages and fine copper traces. Shot from a 45 degree high angle with a 100mm macro lens at f/5.6, sharp focus on the leading edge of the die, the rest of the board falling into soft blur. A soft cyan-white light from above reflects in the die, a signal-red rim light from behind outlines the components, light haze adds depth. Cinematic product macro photography, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### HW-03 · `hw-rack-interior.png`
- **Use:** "inside a server rack" section and background texture.
- **Camera:** 16mm ultra-wide, f/4, low angle looking up inside an open rack.
- **Lighting:** server bezel glow, cyan network cables, red status LEDs.

```
Inside an open server rack: stacked rack-mounted servers with glowing front bezels, dense bundles of network cables, a fibre-optic patch panel, cooling fans visible through perforated panels. Low angle looking up into the rack with a 16mm ultra-wide lens at f/4, strong converging lines, everything sharp. The light comes from the hardware itself: cyan glow from cable LEDs and bezels, small signal-red status LEDs, a faint haze inside the rack. Cinematic editorial photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### HW-04 · `hw-appliance-drawer.png`
- **Use:** Arago-style "drawer slides out" moment. Start frame of VID-03.
- **Camera:** 35mm, f/2.8, eye level, three-quarter side view along the rack.
- **Lighting:** motivated cyan light from inside the open drawer, red status LED, dark room.

```
A rack-mounted AI server appliance drawer pulled halfway out of a black server rack in a dark data centre, revealing the mainboard and a large processor glowing inside. Three-quarter side view along the rack front at eye level, 35mm lens at f/2.8, sharp focus on the open drawer, the rest of the rack row receding into soft darkness. Cyan light spills out from inside the drawer onto the rails and the floor, a small signal-red status LED glows on the drawer front, thin haze in the air catches the light. Cinematic editorial photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### HW-05 · `hw-appliance-assembled.png`
- **Use:** last frame of VID-02 (parts assembling). Must match HOME-01 framing exactly.
- **Method:** same seed, resolution and camera words as HOME-01. Compare the two side by side: the appliance should
  sit in the same place in both frames.
- **Camera:** 50mm, f/5.6, same three-quarter view from slightly above as HOME-01.
- **Lighting:** identical to HOME-01.

```
A compact private AI server appliance, fully assembled and closed: brushed aluminium chassis, slotted front grille glowing faintly cyan from inside, standing alone on a wet black reflective floor in a dark industrial space. Three-quarter front view from slightly above, 50mm lens at f/5.6, the whole appliance in crisp focus, centered with generous dark space around it. Low-key lighting: a signal-red rim light from behind on the left, an acid-cyan rim light from behind on the right, a soft overhead fill, thin haze catching the light beams, mirror-like reflections on the wet floor. Cinematic editorial product photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic materials, no readable text or logos.
```

---

## 5. Stills: product pages (10)

One wide scene and one close-up per product. The close-ups also serve as homepage product cards.

### PROD-KA-WIDE · `product-knowledge-wide.png` (Private Knowledge Assistant)
- **Camera:** 35mm, f/2, eye level, over-the-shoulder three-quarter view.
- **Lighting:** laptop screen as cyan key light, dimmed desk lamp, red city glow behind.

```
Two Southeast Asian lawyers working late in a law firm library, reviewing contracts at a long table with stacked binders and a laptop, one of them pointing at a passage on the screen. Over-the-shoulder three-quarter view at eye level, 35mm lens at f/2, focus on the laptop and the pointing hand. The laptop screen is the key light and casts cyan light on their faces, a dimmed desk lamp adds a little warmth, the window behind them glows signal red from the city at night, shelves of books fade into darkness. Cinematic editorial photograph, focused and trustworthy, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### PROD-KA-CLOSE · `product-knowledge-close.png`
- **Camera:** 50mm, f/1.8, high angle at about 45 degrees.
- **Lighting:** screen glow, red rim from the window.

```
Close-up of hands on a laptop keyboard beside printed documents with highlighted passages, the screen showing a dark chat interface with answers and small citation markers rendered as soft unreadable blocks. High angle of about 45 degrees, 50mm lens at f/1.8, focus on the hands and the edge of the screen, documents falling into soft blur. The screen glow is the only key light, cool cyan on the hands and paper, a thin signal-red rim light from the window behind. Cinematic editorial photograph, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### PROD-VI-WIDE · `product-vision-wide.png` (Private Vision Intelligence)
- **Camera:** 24mm, f/4, high angle from a mezzanine.
- **Lighting:** overhead cool fluorescent strips, red safety lights, haze.

```
A garment factory floor during the night shift, long rows of sewing stations with operators at work, bolts of fabric and carts between the rows, ceiling-mounted dome security cameras clearly visible above the lines. High angle from a mezzanine walkway, 24mm lens at f/4, deep focus across the whole floor. Overhead fluorescent strips cast cool cyan-white light down the rows, red safety lights mark the exits, a light haze of fabric dust in the air. Cinematic industrial photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### PROD-VI-CLOSE · `product-vision-close.png`
- **Camera:** 85mm, f/2, low angle looking up at the camera housing.
- **Lighting:** rain, red indicator LED, defocused cyan yard lights.

```
A dome security camera mounted on a concrete wall at night, raindrops beading on its housing, a small signal-red indicator LED glowing beside the lens. Low angle looking up, 85mm lens at f/2, the camera sharp, the factory yard lights behind dissolved into large cyan bokeh circles. Rain streaks catch the light, the wet concrete reflects a faint red glow. Cinematic night photograph, watchful mood, dystopian near-future atmosphere, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### PROD-CA-WIDE · `product-coding-wide.png` (Private Coding Assistant)
- **Camera:** 35mm, f/2, eye level from behind the row of desks.
- **Lighting:** monitors as key light, dark office, city glow beyond.

```
A software engineering team working late in a dark open-plan office, three developers at dual-monitor desks with dark-theme code editors, seen from behind and slightly to the side. Eye level from behind the row of desks, 35mm lens at f/2, depth running along the desk row, the nearest monitor in focus. The monitors are the only light source and wash the room in cyan, a red accent light strip runs along the far wall, the city at night glows through the windows. Cinematic editorial photograph, focused and calm, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### PROD-CA-CLOSE · `product-coding-close.png`
- **Camera:** 85mm, f/1.8, eye level, very shallow depth of field.
- **Lighting:** monitor glow only.

```
Close-up of a curved monitor showing a dark-theme code editor with syntax highlighting in cyan and red, the code softly out of focus and unreadable, a developer's hands on a mechanical keyboard blurred in the foreground. Eye level, 85mm lens at f/1.8, very shallow depth of field, focus on a single highlighted line on the screen. The monitor is the only light, cyan glow on the keyboard and hands, a faint signal-red reflection on the desk. Cinematic editorial photograph, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### PROD-AP-WIDE · `product-agents-wide.png` (Private AI Agent Platform)
- **Camera:** 28mm, f/2.8, eye level, inside the operations room facing the glass wall.
- **Lighting:** screen glow inside, warehouse lights beyond the glass.

```
A logistics operations room at night with a glass wall overlooking a large warehouse, two operators at desks with screens showing shipment maps and task queues, one leaning in to approve an item on screen. Eye level inside the room, 28mm lens at f/2.8, the operators and screens sharp, the warehouse beyond the glass softly lit. Screen glow lights the operators in cyan, the warehouse floor beyond is lit by rows of cool lights with red beacon lights on moving vehicles, reflections on the glass. Cinematic editorial photograph, efficient and in control, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### PROD-AP-CLOSE · `product-agents-close.png`
- **Camera:** 35mm, f/2.8, low angle at floor level.
- **Lighting:** cyan aisle lighting, red beacon on the robot.

```
An automated warehouse at night, tall racking aisles stretching away, an autonomous mobile robot carrying a tote along the floor toward the camera, a robotic arm picking items at the end of the aisle. Low angle at floor level, 35mm lens at f/2.8, the robot sharp, the aisle receding into haze. Cyan light strips line the racking, a signal-red beacon glows on top of the robot, reflections on the polished concrete floor. Cinematic industrial photograph, dystopian near-future mood, deep teal-black shadows, red and cyan as the only saturated colours, subtle film grain, photorealistic, no readable text or logos.
```

### PROD-IS-WIDE · `product-image-studio-wide.png` (Private Image Generation Studio)
- **Camera:** 35mm, f/2, three-quarter view from behind the designer's shoulder.
- **Lighting:** large monitor as key light, fabric shelves in shadow, red rim.

```
A fashion and textile designer in a dim studio at night, seated at a large colour-calibrated monitor showing a grid of generated textile print designs, rolls of fabric on shelves behind. Three-quarter view from behind the designer's shoulder, 35mm lens at f/2, the screen and the designer's hand on a pen tablet in focus. The monitor is the key light and casts cyan light across the desk, a signal-red rim light outlines the designer and the fabric rolls, the rest of the studio falls into darkness. Cinematic editorial photograph, creative and focused, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### PROD-IS-CLOSE · `product-image-studio-close.png`
- **Camera:** 50mm macro, f/4, high angle of about 30 degrees.
- **Lighting:** backlit light table (cyan), red rim light.

```
Fabric swatches with bold, intricate generated textile prints draped side by side across a glowing light table, the fabric texture and weave clearly visible. High angle of about 30 degrees, 50mm macro lens at f/4, focus on the front swatch, the rest falling into soft blur. The light table glows cyan from below and shines through the thinner fabrics, a signal-red rim light skims the folds from the side, the studio around is dark. Cinematic product photograph, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic textiles, no readable text or logos.
```

---

## 6. Stills: inner pages (10)

### ABOUT-01 · `about-team.png`
- **Camera:** 35mm, f/2, eye level, three-quarter view of the group.
- **Lighting:** glowing whiteboard wall as key light, city glow through the window.

```
A small AI engineering team of four Southeast Asian professionals collaborating at night around a glass whiteboard wall covered in sketched system diagrams drawn as abstract boxes and arrows, one person drawing while the others discuss. Eye level, three-quarter view of the group, 35mm lens at f/2, focus on the person drawing. Light from a cyan LED panel behind the glass wall lights the group, a signal-red glow from the city through the window rims their shoulders, the office behind them falls into shadow. Cinematic editorial photograph, energetic and focused, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### ABOUT-02 · `about-office.png`
- **Camera:** 20mm, f/5.6, eye level, symmetrical one-point perspective.
- **Lighting:** cyan glow from a server room behind glass, otherwise dark.

```
A modern minimalist technology office at night, empty, polished concrete floor, dark glass partitions, a small server room visible behind a glass wall at the far end glowing cyan from rows of server lights. Symmetrical one-point perspective at eye level, 20mm lens at f/5.6, deep focus. The server room is the main light source, its cyan glow reflects along the floor, a thin signal-red light strip runs along the ceiling edge, the rest of the office is dark. Cinematic architectural photograph, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### SERV-01 · `services-install.png`
- **Camera:** 35mm, f/2.8, eye level, profile view.
- **Lighting:** rack LEDs and a cyan torch beam, red status light.

```
A field engineer in a dark work shirt with an ID lanyard sliding a server appliance into a rack in a client's server room, seen in profile, both hands on the appliance. Eye level, 35mm lens at f/2.8, focus on the hands and the appliance front. The rack LEDs and a small cyan work light clipped to the rack light the scene, a signal-red status light glows on the neighbouring server, haze in the air. Cinematic editorial photograph, competent and careful, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### SERV-02 · `services-workshop.png`
- **Camera:** 28mm, f/2.8, from the back of the room behind the participants.
- **Lighting:** projected screen as key light, faces lit from the front.

```
A consulting workshop in a dark meeting room, a facilitator standing beside a large screen showing an abstract process flow of glowing nodes and connecting lines, five client participants around the table seen from behind. From the back of the room, 28mm lens at f/2.8, focus on the facilitator. The screen is the key light and bathes the room in cyan, a signal-red accent from a wall light on the side, the participants are dark silhouettes against the screen. Cinematic editorial photograph, engaged and professional, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### PART-01 · `partners-handshake.png`
- **Camera:** 85mm, f/1.8, waist level, focus on the handshake.
- **Lighting:** city lights behind glass, cyan key from the side.

```
Two business partners in dark suits shaking hands in a modern office lobby at night, their faces turned slightly away in soft profile, the handshake in the centre of the frame. Waist-level camera, 85mm lens at f/1.8, sharp focus on the handshake, the people softening into blur. A cyan key light from the side outlines their hands and sleeves, the city lights behind the glass wall glow signal red and teal as large bokeh. Cinematic editorial photograph, trust and agreement, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### CAR-01 · `careers-team.png`
- **Camera:** 50mm, f/1.8, eye level, slight three-quarter view.
- **Lighting:** laptop glow and a soft cyan overhead, gentle fill for natural skin.

```
A young, diverse Southeast Asian tech team of three at a standing desk late in the evening, laughing while reviewing something on a laptop, casual smart clothing. Eye level, slight three-quarter view, 50mm lens at f/1.8, focus on the person in the middle. A soft cyan overhead light and the laptop glow light their faces, a gentle fill keeps the skin natural, a signal-red neon accent on the wall behind them, the rest of the office dark. Cinematic editorial photograph, warm and energetic, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### CAR-02 · `careers-developer.png`
- **Camera:** 50mm, f/1.4, side profile, eye level.
- **Lighting:** dual monitors as key light, night city through the window.

```
A developer wearing headphones focused on a dual-monitor setup late at night, seen in side profile. Eye level, 50mm lens at f/1.4, sharp focus on the face and headphones, monitors and background in soft blur. The monitors cast cyan light across the face, the city at night glows signal red and teal through the window behind as soft bokeh. Cinematic editorial photograph, deep focus and calm, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic skin, no readable text or logos.
```

### INV-01 · `invest-boardroom.png`
- **Camera:** 35mm, f/2, from the back of the room behind the audience.
- **Lighting:** presentation screen as key light, audience in silhouette.

```
An executive presenting growth charts on a large screen to a small group of investors in a dark boardroom at night, the investors seen from behind as silhouettes in the foreground. From the back of the room, 35mm lens at f/2, focus on the presenter beside the screen. The screen is the key light, showing abstract rising line charts in cyan and red, it rims the investors' shoulders in cyan, the city glows through the window on the side. Cinematic editorial photograph, confident and ambitious, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

### CONT-01 · `contact-reception.png`
- **Camera:** 24mm, f/5.6, eye level, frontal symmetrical composition.
- **Lighting:** red accent strip under the desk, cyan ceiling light line, floor reflections.

```
A modern office reception and entrance at night, a long illuminated reception desk with a signal-red light strip along its base, glass entrance doors on both sides, polished dark floor with reflections, a plain blank wall behind the desk. Frontal symmetrical composition at eye level, 24mm lens at f/5.6, deep focus. A thin cyan light line runs across the ceiling, the red desk light reflects on the floor, the space is otherwise dark and calm. Cinematic architectural photograph, welcoming and premium, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no signage lettering, no readable text or logos.
```

### WP-01 · `whitepapers-reading.png`
- **Camera:** 50mm, f/1.8, slight high angle over the shoulder.
- **Lighting:** tablet screen as key light on the face, red ambient from a lamp.

```
A professional in a dim executive lounge reading a technical report on a tablet, the tablet screen showing soft unreadable columns of text and a diagram. Slight high angle over the shoulder, 50mm lens at f/1.8, focus on the tablet and hands. The tablet screen lights the reader's face in cool cyan, a low signal-red lamp glows in the background, the lounge falls into darkness. Cinematic editorial photograph, thoughtful and focused, dystopian near-future mood, deep teal-black shadows, subtle film grain, photorealistic, no readable text or logos.
```

---

## 7. Videos: Wan 2.2 (8)

Clips 1 to 3 make the scroll story; I convert them into a scroll-scrubbed frame sequence (about 60 frames each,
WebP). Clips 4 to 8 become short, muted, lazy-loaded background videos (target under 2 MB each).

### VID-01 · `story-1-chip.mp4` (scroll story, shot 1)
- **Workflow:** image-to-video, start frame HW-01.
- **Camera move:** slow dolly out.

```
The camera slowly pulls back from the iridescent wafer surface, revealing more and more of the wafer. A band of cyan light sweeps slowly across the dies from left to right, making the iridescent colours shift from cyan to red. Fine dust particles drift through the light beam. Smooth, slow, continuous dolly out, macro lens, pure black background, cinematic.
```

### VID-02 · `story-2-assemble.mp4` (scroll story, shot 2)
- **Workflow:** First-Last-Frame. First frame HOME-01 (exploded), last frame HW-05 (assembled).
- **Camera move:** static.

```
The floating parts of the server appliance glide together and lock into place one layer at a time, from the bottom up: mainboard, memory, cooling fins, fan and finally the chassis panels close around them. As the last panel seals, the front grille lights up with a soft cyan glow. Static camera, precise and smooth mechanical motion, haze drifting in the rim lights, reflections on the wet floor follow the parts. Cinematic product film.
```

### VID-03 · `story-3-rack.mp4` (scroll story, shot 3)
- **Workflow:** image-to-video, start frame HW-04.
- **Camera move:** slow push in.

```
The appliance drawer slides further out of the server rack toward the camera on smooth rails, the cyan light from inside the drawer grows brighter and spills across the floor, the red status LED on the drawer front blinks twice. The camera slowly pushes in toward the glowing processor inside. Haze drifts through the light. Smooth, slow, cinematic, no cuts.
```

### VID-04 · `loop-city-rain.mp4` (intro backdrop loop)
- **Workflow:** First-Last-Frame with HOME-02 as both first and last frame (seamless loop).
- **Camera move:** locked-off, static.

```
Rain streaks run slowly down the window glass, droplets gather and slide away. Far below, traffic light trails move through the city streets and distant signage softly pulses. The room stays still and dark. Locked-off static camera, calm ambient motion, cinematic.
```

### VID-05 · `loop-datacentre.mp4` (advantages backdrop loop)
- **Workflow:** First-Last-Frame with HOME-05 as both first and last frame.
- **Camera move:** locked-off, static.

```
Thousands of tiny status LEDs on the server racks blink in random rhythms, thin haze drifts slowly down the aisle through the cyan light, the red warning beacon at the far end pulses gently. Locked-off static camera, calm ambient motion, cinematic.
```

### VID-06 · `loop-control-room.mp4` (stats band backdrop loop)
- **Workflow:** First-Last-Frame with HOME-03 as both first and last frame.
- **Camera move:** locked-off, static.

```
The data visualisations on the screen wall animate: lines draw across network maps, graph values update, a red alert marker blinks and clears. The operator in silhouette shifts slightly in the chair. Light from the screens flickers softly across the room and haze. Locked-off static camera, calm ambient motion, cinematic.
```

### VID-07 · `hero-motion.mp4` (optional hero motion version)
- **Workflow:** First-Last-Frame with HOME-01 as both first and last frame.
- **Camera move:** static.
- **Note:** the hero stays a still by default. This clip is an option for desktop only, and the still stays as the
  fallback for phones and reduced motion.

```
The floating parts of the server appliance hover with a tiny, slow drifting motion, as if weightless. Haze drifts slowly through the red and cyan rim lights, the rim lights breathe gently brighter and dimmer, faint ripples move across the reflections on the wet floor. Static camera, subtle and elegant ambient motion, cinematic product film.
```

### VID-08 · `markets-flyover.mp4` (markets section header)
- **Workflow:** image-to-video, start frame CITY-SG.
- **Camera move:** slow aerial push in.

```
A slow, smooth aerial drone push forward over the bay toward the skyline at night, the city lights twinkle, reflections ripple gently on the water, low clouds drift slowly above the towers. Steady cinematic drone movement, no shake, no cuts.
```

---

## 8. Checklist

| # | File | Type | Section |
| --- | --- | --- | --- |
| 1 | home-hero.png | still | Homepage hero |
| 2 | home-intro.png | still | Homepage introduction |
| 3 | home-control-room.png | still | Homepage stats |
| 4 | home-cta-boardroom.png | still | Homepage CTA |
| 5 | home-datacentre-aisle.png | still | Homepage advantages |
| 6 to 11 | city-singapore / kuala-lumpur / jakarta / bangkok / ho-chi-minh / shenzhen .png | still | Markets carousel |
| 12 to 16 | hw-chip-wafer / superchip / rack-interior / appliance-drawer / appliance-assembled .png | still | Hardware, scroll story |
| 17 to 26 | product-knowledge / vision / coding / agents / image-studio, each -wide and -close .png | still | Product pages, homepage cards |
| 27 to 36 | about-team, about-office, services-install, services-workshop, partners-handshake, careers-team, careers-developer, invest-boardroom, contact-reception, whitepapers-reading .png | still | Inner pages |
| V1 to V3 | story-1-chip, story-2-assemble, story-3-rack .mp4 | video | Scroll story |
| V4 to V8 | loop-city-rain, loop-datacentre, loop-control-room, hero-motion, markets-flyover .mp4 | video | Background loops, hero option, markets |
