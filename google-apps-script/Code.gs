/**
 * D4 Community — Apply form → Google Sheets bridge.
 *
 * Setup:
 *   1. Open (or create) the Google Sheet you want submissions saved to.
 *   2. Extensions → Apps Script.
 *   3. Delete anything in Code.gs and paste this whole file in.
 *   4. Deploy → New deployment → type "Web app".
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      Deploy, authorize when prompted, and copy the URL ending in /exec.
 *   5. In the Next.js app's .env.local (or your host's env vars):
 *        GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXX/exec
 *
 * You do NOT need to create header row manually — the first submission
 * will create it automatically, in the field order below. If you'd rather
 * control the column order yourself, add the header row before the first
 * submission and this script will match to it by name instead.
 */

// Column order used only when the sheet is empty and headers need to be
// created for the first time. Keep in sync with app/api/apply/route.ts.
var FIELD_ORDER = [
  "submittedAt",
  "name",
  "email",
  "phone",
  "whatsapp",
  "college",
  "currentYear",
  "degree",
  "branch",
  "gradYear",
  "campus",
  "primaryDomain",
  "secondaryDomain",
  "hasExperience",
  "expOrg",
  "expRole",
  "expDuration",
  "expOwned",
  "expContribution",
  "expOutcome",
  "proudProject",
  "why",
  "uniqueContribution",
  "ownershipStory",
  "failureStory",
  "teamRole",
  "commitment",
  "scenario",
  "availabilityFullYear",
  "meetingPref",
  "crossCampus",
  "preferredDays",
  "buildIdea",
  "links",
];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lock = LockService.getScriptLock();
  lock.waitLock(10000); // avoid two simultaneous submissions clobbering the header row

  try {
    var data = JSON.parse(e.postData.contents);

    // Create the header row on the very first submission if the sheet is empty.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(FIELD_ORDER);
    }

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    var row = headers.map(function (h) {
      if (h === "submittedAt") {
        // Store as a readable, sortable timestamp instead of a raw ISO string.
        var d = data.submittedAt ? new Date(data.submittedAt) : new Date();
        return Utilities.formatDate(d, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
      }
      var val = data[h];
      return val === undefined || val === null ? "" : val;
    });

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Lets you sanity-check the deployment by opening the /exec URL in a browser.
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "D4 apply webhook is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}
