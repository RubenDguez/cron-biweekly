# Biweekly Date Checker GitHub Action

This action checks if the current date is biweekly from a given reference date.

## Inputs

| Name            | Description                               | Required |
|-----------------|-------------------------------------------|----------|
| `reference-date`| The reference date in `YYYY-MM-DD` format | Yes      |

## Outputs

| Name          | Description                             |
|---------------|-----------------------------------------|
| `is-biweekly` | True if the current date is biweekly from the reference date, false otherwise |

## Example Usage

```yaml
jobs:
  check-biweekly:
    runs-on: ubuntu-latest
    steps:
      - name: Check if today is biweekly from a given date
        uses: RubenDguez/cron-biweekly@v1
        with:
          reference-date: "2024-01-01"
        id: check

      - name: Output result
        run: echo "Is today biweekly? ${{ steps.check.outputs.is-biweekly }}"
