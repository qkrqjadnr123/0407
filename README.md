# Rail Atlas

Static bilingual concept site for comparing SRT and KTX options with an Apple + Airbnb inspired UI direction.

## Run

Serve the directory with any static server, for example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Notes

- `awesome-design-md` was used as visual reference from the Apple and Airbnb design systems.
- `k-skill` was used as workflow reference for KTX and SRT booking guidance.
- The current version ranks sample train results locally in the browser.
- Live booking automation would require wiring the UI to the `k-skill` Python flows and adding credentials/runtime packages.
