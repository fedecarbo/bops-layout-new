# UI Blocks Component Catalog

**Total Components:** 347
**Last Updated:** 2025-11-13

This catalog provides a comprehensive, searchable index of all UI components in the application-ui library.

---

## Table of Contents

1. [Catalog Structure](#catalog-structure)
2. [Tag Index](#tag-index)
3. [Use Case Recommendations](#use-case-recommendations)
4. [Component Statistics](#component-statistics)

---

## Catalog Structure

Components organized by Category → Element → Variant


### Application Shells

#### Multi-Column Layouts

- **01-full-width-three-column**: Full-width three-column [tags: sidebar, navigation, dark, mobile-menu, responsive, teams, three-column, multi-column, aside] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Three-column layout with left sidebar (w-72), middle secondary column (w-96), and main content...._
- **02-full-width-secondary-column-on-right**: Full-width secondary column on right [tags: sidebar, navigation, dark, mobile-menu, responsive, teams, three-column, multi-column, aside, right-sidebar] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Three-column layout with left sidebar (w-72), main content in center, and right secondary column (w-..._
- **03-constrained-three-column**: Constrained three column [tags: three-column, multi-column, constrained, max-width, header, notifications, responsive] [deps: @heroicons/react/24/outline]
  - _Constrained three-column layout with max-w-7xl container and flex-based column system...._
- **04-constrained-with-sticky-columns**: Constrained with sticky columns [tags: three-column, multi-column, constrained, max-width, header, notifications, responsive, sticky] [deps: @heroicons/react/24/outline]
  - _Constrained three-column layout with sticky positioned side columns (top-8)...._
- **05-full-width-with-narrow-sidebar**: Full-width with narrow sidebar [tags: sidebar, navigation, dark, mobile-menu, responsive, three-column, multi-column, narrow-sidebar, icon-only, aside] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Three-column layout with narrow icon-only sidebar (w-20), secondary column (w-96), and main content...._
- **06-full-width-with-narrow-sidebar-and-header**: Full-width with narrow sidebar and header [tags: sidebar, navigation, dark, header, search, mobile-menu, profile-dropdown, notifications, responsive, three-column, multi-column, narrow-sidebar, icon-only, aside] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _Three-column layout with narrow sidebar (w-20), header bar, secondary column (w-96), and main conten..._

#### Sidebar Layouts

- **01-simple-sidebar**: Simple sidebar [tags: sidebar, navigation, dark, mobile-menu, responsive, teams] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Dark-themed sidebar layout with fixed desktop sidebar and mobile dialog overlay...._
- **02-simple-dark-sidebar**: Simple dark sidebar [tags: sidebar, navigation, dark, mobile-menu, responsive, teams] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Simplified dark sidebar layout without icon color variations on hover...._
- **03-sidebar-with-header**: Sidebar with header [tags: sidebar, navigation, dark, header, search, mobile-menu, profile-dropdown, notifications, responsive, teams] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _Sidebar layout with sticky top header bar featuring search, notifications, and profile dropdown...._
- **04-dark-sidebar-with-header**: Dark sidebar with header [tags: sidebar, navigation, dark, header, search, mobile-menu, profile-dropdown, notifications, responsive, teams] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _Dark sidebar variant with subtle ring border on desktop sidebar (ring-1 ring-white/10)...._
- **05-with-constrained-content-area**: With constrained content area [tags: sidebar, navigation, dark, header, search, mobile-menu, profile-dropdown, notifications, responsive, teams, constrained, max-width] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _Sidebar layout with constrained content area using max-w-7xl container...._
- **06-with-off-white-background**: With off-white background [tags: sidebar, navigation, dark, mobile-menu, responsive, teams] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Dark sidebar with off-white main content area background implied by template comments...._
- **07-simple-brand-sidebar**: Simple brand sidebar [tags: sidebar, navigation, brand, indigo, mobile-menu, responsive, teams] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Brand-colored sidebar using indigo-800 background with indigo-100 text colors...._
- **08-brand-sidebar-with-header**: Brand sidebar with header [tags: sidebar, navigation, brand, indigo, header, search, mobile-menu, profile-dropdown, notifications, responsive, teams] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _Brand-colored indigo sidebar with dark gray-900 header bar containing search and profile...._

#### Stacked Layouts

- **01-with-bottom-border**: With bottom border [tags: app-shell, layout, navigation, dark, responsive, mobile-menu, profile-dropdown, notifications, stacked] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Full dark application shell with stacked layout and bottom-bordered navbar...._
- **02-on-subtle-background**: On subtle background [tags: app-shell, layout, navigation, dark, responsive, mobile-menu, profile-dropdown, notifications, stacked, subtle-background] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Dark application shell with subtle background (bg-gray-800/50 navbar on bg-gray-900 body)...._
- **03-with-lighter-page-header**: With lighter page header [tags: app-shell, layout, navigation, dark, responsive, mobile-menu, profile-dropdown, notifications, stacked, page-header] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Dark application shell with lighter bg-gray-800 page header section...._
- **04-branded-nav-with-compact-lighter-page-header**: Branded nav with compact lighter page header [tags: app-shell, layout, navigation, dark, responsive, mobile-menu, profile-dropdown, notifications, stacked, branded, indigo, compact-header] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Branded application shell with bg-indigo-800 navbar and compact lighter header...._
- **05-with-overlap**: With overlap [tags: app-shell, layout, navigation, dark, responsive, mobile-menu, profile-dropdown, notifications, stacked, overlap, card] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Dark application shell with overlapping content card design using negative margin...._
- **06-brand-nav-with-overlap**: Brand nav with overlap [tags: app-shell, layout, navigation, dark, responsive, mobile-menu, profile-dropdown, notifications, stacked, branded, indigo, overlap, search, card] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Branded indigo application shell with overlap effect and search functionality...._
- **07-branded-nav-with-lighter-page-header**: Branded nav with lighter page header [tags: app-shell, layout, navigation, dark, responsive, mobile-menu, profile-dropdown, notifications, stacked, branded, indigo, page-header] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Branded indigo navigation with lighter bg-gray-800 page header section...._
- **08-with-compact-lighter-page-header**: With compact lighter page header [tags: app-shell, layout, navigation, dark, responsive, mobile-menu, profile-dropdown, notifications, stacked, compact-header, subtle-background] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Dark application shell with subtle bg-gray-800/50 nav and compact lighter header...._
- **09-two-row-navigation-with-overlap**: Two-row navigation with overlap [tags: app-shell, layout, navigation, dark, responsive, mobile-menu, profile-dropdown, notifications, stacked, branded, indigo, overlap, two-row, search, dialog, grid-layout, footer] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _Complex branded application shell with two-row navigation, overlap, and grid layout...._


### Data Display

#### Calendars

- **01-small-with-meetings**: Small with meetings [tags: calendar, data-display, dark, meetings, grid-layout, dropdown-menu, responsive] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Two-column layout combining a compact calendar grid with a meeting list...._
- **02-month-view**: Month view [tags: calendar, data-display, dark, month-view, events, grid-layout, dropdown-menu, responsive] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Full-page month calendar with inline events and comprehensive controls...._
- **03-week-view**: Week view [tags: calendar, data-display, dark, week-view, events, grid-layout, time-slots, dropdown-menu, responsive] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Full-page week calendar with hourly time slots and positioned events...._
- **04-day-view**: Day view [tags: calendar, data-display, dark, day-view, events, grid-layout, time-slots, sidebar, dropdown-menu, responsive] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Full-page single-day calendar with hourly time slots and optional month sidebar...._
- **05-year-view**: Year view [tags: calendar, data-display, dark, year-view, grid-layout, dropdown-menu, responsive] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Full-year calendar grid displaying all 12 months at once...._
- **06-double**: Double [tags: calendar, data-display, dark, double-month, events-list, grid-layout, responsive] [deps: @heroicons/react/20/solid]
  - _Two-month calendar view with upcoming events list below...._
- **07-borderless-stacked**: Borderless stacked [tags: calendar, data-display, dark, borderless, meetings, stacked, dropdown-menu, responsive] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Compact borderless calendar with stacked meetings list below...._
- **08-borderless-side-by-side**: Borderless side-by-side [tags: calendar, data-display, dark, borderless, meetings, side-by-side, dropdown-menu, responsive] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Two-column layout with borderless calendar and meeting list side-by-side...._

#### Description Lists

- **01-left-aligned**: Left-aligned [tags: description-list, data-display, dark, attachments, responsive] [deps: @heroicons/react/20/solid]
  - _Dark-themed description list with left-aligned labels and responsive grid layout...._
- **02-left-aligned-in-card**: Left-aligned in card [tags: description-list, data-display, card, dark, attachments, responsive] [deps: @heroicons/react/20/solid]
  - _Card-wrapped description list with dark gray background and inset ring border...._
- **03-left-aligned-striped**: Left-aligned striped [tags: description-list, data-display, dark, striped, attachments, responsive] [deps: @heroicons/react/20/solid]
  - _Striped description list with alternating row backgrounds for improved readability...._
- **04-two-column**: Two-column [tags: description-list, data-display, dark, two-column, grid-layout, attachments, responsive] [deps: @heroicons/react/20/solid]
  - _Two-column grid layout for compact data presentation with labels stacked above values...._
- **05-left-aligned-with-inline-actions**: Left-aligned with inline actions [tags: description-list, data-display, dark, inline-actions, editable, attachments, responsive] [deps: @heroicons/react/20/solid]
  - _Editable description list with inline action buttons for each field...._
- **06-narrow-with-hidden-labels**: Narrow with hidden labels [tags: description-list, data-display, card, dark, compact, icons, badge, narrow] [deps: @heroicons/react/20/solid]
  - _Compact card-based summary layout with icon-based labels and sr-only text for accessibility...._

#### Stats

- **01-with-trending**: With trending [tags: stats, data-display, dark, grid-layout, metrics, trending, responsive] [deps: ]
  - _Grid-based stats display with trend indicators and conditional styling...._
- **02-simple**: Simple [tags: stats, data-display, dark, grid-layout, metrics, simple, responsive] [deps: ]
  - _Clean stats grid with optional unit labels displayed inline with values...._
- **03-simple-in-cards**: Simple in cards [tags: stats, data-display, dark, card, grid-layout, metrics, simple, responsive] [deps: ]
  - _Card-based stats layout with individual rounded cards for each metric...._
- **04-with-brand-icon**: With brand icon [tags: stats, data-display, dark, card, icons, trending, grid-layout, metrics, responsive] [deps: @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Feature-rich stat cards with brand icons, trend indicators, and action links...._
- **05-with-shared-borders**: With shared borders [tags: stats, data-display, dark, card, trending, shared-borders, grid-layout, metrics, responsive] [deps: @heroicons/react/20/solid]
  - _Unified card layout with shared borders using divide utilities and grid...._


### Elements

#### Avatars

- **01-circular-avatars**: Circular avatars [tags: avatar, profile, circular, sizes] [deps: ]
  - _|-_
- **02-rounded-avatars**: Rounded avatars [tags: avatar, profile, rounded, sizes] [deps: ]
  - _|-_
- **03-circular-with-top-notification**: Circular avatars with top notification [tags: avatar, profile, circular, notification-badge, status-indicator, sizes] [deps: ]
  - _|-_
- **04-rounded-with-top-notification**: Rounded avatars with top notification [tags: avatar, profile, rounded, notification-badge, status-indicator, sizes] [deps: ]
  - _|-_
- **05-circular-with-bottom-notification**: Circular avatars with bottom notification [tags: avatar, profile, circular, notification-badge, status-indicator, online-status, sizes] [deps: ]
  - _|-_
- **06-rounded-with-bottom-notification**: Rounded avatars with bottom notification [tags: avatar, profile, rounded, notification-badge, status-indicator, online-status, sizes] [deps: ]
  - _|-_
- **07-circular-with-placeholder-icon**: Circular avatars with placeholder icon [tags: avatar, placeholder, circular, icon, fallback, sizes] [deps: ]
  - _|-_
- **08-circular-with-placeholder-initials**: Circular avatars with placeholder initials [tags: avatar, placeholder, circular, initials, fallback, sizes] [deps: ]
  - _|-_
- **09-avatar-group-stacked-bottom-to-top**: Avatar group stacked bottom to top [tags: avatar, avatar-group, stacked, team, circular, sizes] [deps: ]
  - _|-_
- **10-avatar-group-stacked-top-to-bottom**: Avatar group stacked top to bottom [tags: avatar, avatar-group, stacked, team, circular, z-index, sizes] [deps: ]
  - _|-_
- **11-with-text**: With text [tags: avatar, profile, circular, user-info, link, hover] [deps: ]
  - _|-_

#### Badges

- **01-with-border**: With border [tags: badge, status, label, bordered, color-variants] [deps: ]
  - _|-_
- **02-with-border-and-dot**: With border and dot [tags: badge, status, label, bordered, status-indicator, color-variants] [deps: ]
  - _|-_
- **03-pill-with-border**: Pill with border [tags: badge, status, label, pill, bordered, rounded-full, color-variants] [deps: ]
  - _|-_
- **04-pill-with-border-and-dot**: Pill with border and dot [tags: badge, status, label, pill, bordered, rounded-full, status-indicator, color-variants] [deps: ]
  - _|-_
- **05-with-border-and-remove-button**: With border and remove button [tags: badge, status, label, bordered, dismissible, removable, interactive, color-variants] [deps: ]
  - _|-_
- **06-flat**: Flat [tags: badge, status, label, flat, no-border, color-variants] [deps: ]
  - _|-_
- **07-flat-pill**: Flat pill [tags: badge, status, label, pill, flat, no-border, rounded-full, color-variants] [deps: ]
  - _|-_
- **08-flat-with-dot**: Flat with dot [tags: badge, status, label, flat, no-border, status-indicator, color-variants] [deps: ]
  - _|-_
- **09-flat-pill-with-dot**: Flat pill with dot [tags: badge, status, label, pill, flat, no-border, rounded-full, status-indicator, color-variants] [deps: ]
  - _|-_
- **10-flat-with-remove-button**: Flat with remove button [tags: badge, status, label, flat, no-border, dismissible, removable, interactive, color-variants] [deps: ]
  - _|-_
- **11-small-with-border**: Small with border [tags: badge, status, label, small, compact, bordered, color-variants] [deps: ]
  - _|-_
- **12-small-flat**: Small flat [tags: badge, status, label, small, compact, flat, no-border, color-variants] [deps: ]
  - _|-_
- **13-small-pill-with-border**: Small pill with border [tags: badge, status, label, small, compact, pill, bordered, rounded-full, color-variants] [deps: ]
  - _|-_
- **14-small-flat-pill**: Small flat pill [tags: badge, status, label, small, compact, pill, flat, no-border, rounded-full, color-variants] [deps: ]
  - _|-_
- **15-small-flat-with-dot**: Small flat with dot [tags: badge, status, label, small, compact, flat, no-border, status-indicator, color-variants] [deps: ]
  - _|-_
- **16-small-flat-pill-with-dot**: Small flat pill with dot [tags: badge, status, label, small, compact, pill, flat, no-border, rounded-full, status-indicator, color-variants] [deps: ]
  - _|-_

#### Button Groups

- **01-basic**: Basic [tags: button-group, segmented, inline] [deps: ]
  - _Basic segmented button group with three connected buttons. Uses negative margin (-ml-px) to collapse..._
- **02-icon-only**: Icon only [tags: button-group, icon-only, navigation, pagination] [deps: @heroicons/react/20/solid]
  - _Icon-only button group for navigation controls (previous/next). Uses sr-only labels for accessibilit..._
- **03-with-stat**: With stat [tags: button-group, icon, stat, counter] [deps: @heroicons/react/20/solid]
  - _Button group combining action button with statistical display. Left button has icon and label, right..._
- **04-with-dropdown**: With dropdown [tags: button-group, dropdown, split-button, actions] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Split button pattern combining primary action with dropdown menu for related actions. Left button ex..._
- **05-with-checkbox-and-dropdown**: With checkbox and dropdown [tags: button-group, checkbox, select, dropdown, bulk-actions] [deps: @heroicons/react/16/solid]
  - _Composite control combining checkbox for bulk selection with dropdown filter. Uses CSS grid for sele..._

#### Buttons

- **01-primary-buttons**: Primary buttons [tags: button, primary, multiple-sizes] [deps: ]
  - _Collection of primary buttons in 5 sizes (xs to xl) with consistent indigo branding. Uses focus-visi..._
- **02-secondary-buttons**: Secondary buttons [tags: button, secondary, outlined, multiple-sizes] [deps: ]
  - _Secondary button variants with white background and gray ring border. Uses inset-ring utility for bo..._
- **03-soft-buttons**: Soft buttons [tags: button, soft, tinted, multiple-sizes] [deps: ]
  - _Soft-styled buttons using light indigo background with darker indigo text. Creates a subtle, tinted ..._
- **04-buttons-with-leading-icon**: Buttons with leading icon [tags: button, icon, leading-icon, multiple-sizes] [deps: @heroicons/react/20/solid]
  - _Primary buttons with leading icons in three sizes. Uses negative left margin (-ml-0.5) to optically ..._
- **05-buttons-with-trailing-icon**: Buttons with trailing icon [tags: button, icon, trailing-icon, multiple-sizes] [deps: @heroicons/react/20/solid]
  - _Primary buttons with trailing icons. Uses negative right margin (-mr-0.5) for optical alignment. Com..._
- **06-rounded-primary-buttons**: Rounded primary buttons [tags: button, primary, rounded, pill, multiple-sizes] [deps: ]
  - _Fully rounded (pill-shaped) primary buttons using rounded-full. Padding adjusted to maintain visual ..._
- **07-rounded-secondary-buttons**: Rounded secondary buttons [tags: button, secondary, rounded, pill, outlined, multiple-sizes] [deps: ]
  - _Fully rounded secondary buttons with white background and gray ring border. Combines pill shape with..._
- **08-circular-buttons**: Circular buttons [tags: button, circular, icon-only, fab, multiple-sizes] [deps: @heroicons/react/20/solid]
  - _Icon-only circular buttons (floating action button style). Uses equal padding on all sides with roun..._

#### Dropdowns

- **01-simple**: Simple [tags: dropdown, menu, options, chevron] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Basic dropdown menu with button trigger and chevron icon. Uses Headless UI Menu components with righ..._
- **02-with-dividers**: With dividers [tags: dropdown, menu, dividers, grouped] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Dropdown menu with visual dividers separating grouped actions. Uses Tailwind's divide utility to cre..._
- **03-with-icons**: With icons [tags: dropdown, menu, icons, dividers, grouped] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Enhanced dropdown with icons for each menu item. Icons change color on focus using group-data-focus ..._
- **04-with-minimal-menu-icon**: With minimal menu icon [tags: dropdown, menu, minimal, icon-button, ellipsis] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Minimal dropdown triggered by three-dot ellipsis icon button. Uses rounded-full button with focus-vi..._
- **05-with-simple-header**: With simple header [tags: dropdown, menu, header, user-context, dividers] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Dropdown menu with contextual header showing user information. Header displays signed-in email with ..._


### Feedback

#### Alerts

- **01-with-description**: With description [tags: alert, warning, feedback, notification] [deps: @heroicons/react/20/solid]
  - _Warning-style alert with yellow color scheme. Features an icon and description text...._
- **02-with-list**: With list [tags: alert, error, feedback, validation, list] [deps: @heroicons/react/20/solid]
  - _Error-style alert with red color scheme. Displays multiple validation errors..._
- **03-with-actions**: With actions [tags: alert, success, feedback, actions, buttons] [deps: @heroicons/react/20/solid]
  - _Success-style alert with green color scheme. Includes action buttons for user..._
- **04-with-link-on-right**: With link on right [tags: alert, info, feedback, link, responsive] [deps: @heroicons/react/20/solid]
  - _Info-style alert with blue color scheme. Features responsive layout with link..._
- **05-with-accent-border**: With accent border [tags: alert, warning, feedback, border, link] [deps: @heroicons/react/20/solid]
  - _Warning-style alert with yellow color scheme and left accent border. Features..._
- **06-with-dismiss-button**: With dismiss button [tags: alert, success, feedback, dismissible, button] [deps: @heroicons/react/20/solid]
  - _Success-style alert with green color scheme and dismiss button. Uses ml-auto..._

#### Empty States

- **01-simple**: Simple [tags: empty-state, feedback, cta-button, icon] [deps: @heroicons/react/20/solid]
  - _Simple centered empty state with inline SVG icon, heading, description, and CTA button...._
- **02-with-dashed-border**: With dashed border [tags: empty-state, feedback, dashed-border, clickable] [deps: ]
  - _Full-width clickable empty state styled as a button with dashed border...._
- **03-with-starting-points**: With starting points [tags: empty-state, feedback, grid, templates, list] [deps: @heroicons/react/24/outline]
  - _Empty state with multiple starting point options in responsive grid layout...._
- **04-with-recommendations**: With recommendations [tags: empty-state, feedback, form, list, recommendations] [deps: @heroicons/react/20/solid]
  - _Empty state with email invite form and recommended team members list...._
- **05-with-templates**: With templates [tags: empty-state, feedback, templates, list, icons] [deps: @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Empty state with project template options in vertical list format...._
- **06-with-recommendations-grid**: With recommendations grid [tags: empty-state, feedback, form, grid, recommendations, select] [deps: @heroicons/react/16/solid, @heroicons/react/20/solid]
  - _Empty state with combined input/select form and team recommendations in responsive grid...._


### Forms

#### Action Panels

- **01-simple**: Simple [tags: action-panel, card, button, call-to-action] [deps: ]
  - _Simple action panel card with heading, description text, and primary action button...._
- **02-with-link**: With link [tags: action-panel, card, link, call-to-action] [deps: ]
  - _Action panel with text link instead of button. Link styled with indigo color and..._
- **03-with-button-on-right**: With button on right [tags: action-panel, card, button, responsive, horizontal-layout] [deps: ]
  - _Action panel with button positioned to the right of description text on larger screens...._
- **04-with-button-at-top-right**: With button at top right [tags: action-panel, card, button, responsive, horizontal-layout] [deps: ]
  - _Action panel with button aligned to top-right, next to heading on larger screens...._
- **05-with-toggle**: With toggle [tags: action-panel, card, toggle, switch, responsive] [deps: ]
  - _Action panel with toggle switch instead of button. Toggle positioned to the right..._
- **06-with-input**: With input [tags: action-panel, card, form, input, button, responsive] [deps: ]
  - _Action panel with inline form containing email input and submit button. Uses responsive..._
- **07-simple-well**: Simple well [tags: action-panel, well, card, button, secondary] [deps: ]
  - _Action panel with gray well background (bg-gray-50) instead of white. Secondary button..._
- **08-with-well**: With well [tags: action-panel, card, well, button, payment-method, responsive] [deps: ]
  - _Action panel containing nested gray well with payment method details. Well uses responsive..._

#### Checkboxes

- **01-list-with-description**: List with description [tags: checkbox, form-control, fieldset, description, custom-checkbox, svg-icon] [deps: ]
  - _Custom checkbox using grid overlay technique with SVG checkmark. Grid positions checkbox input..._
- **02-list-with-inline-description**: List with inline description [tags: checkbox, form-control, fieldset, inline-description, custom-checkbox, svg-icon] [deps: ]
  - _Similar to list with description but description appears inline on same line as label...._
- **03-list-with-checkbox-on-right**: List with checkbox on right [tags: checkbox, form-control, fieldset, description, right-aligned, dividers, custom-checkbox] [deps: ]
  - _Checkbox positioned on right side with label and description on left. Uses divide-y with..._
- **04-simple-list-with-heading**: Simple list with heading [tags: checkbox, form-control, fieldset, simple, right-aligned, dividers, custom-checkbox] [deps: ]
  - _Simple checkbox list with visible heading (legend). Checkboxes positioned on right with..._

#### Comboboxes

- **01-simple**: Simple [tags: combobox, autocomplete, search, dropdown, form-control, headlessui] [deps: @headlessui/react, @heroicons/react/20/solid, react]
  - _Simple combobox with search/filter functionality using Headless UI. Features text input..._
- **02-with-status-indicator**: With status indicator [tags: combobox, autocomplete, search, dropdown, form-control, status-indicator, headlessui] [deps: @headlessui/react, @heroicons/react/20/solid, react]
  - _Combobox with colored status indicators (online/offline) shown as dots next to each option...._
- **03-with-image**: With image [tags: combobox, autocomplete, search, dropdown, form-control, avatar, image, headlessui] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/16/solid, react]
  - _Combobox with user avatar images next to each option. New query option shows UserIcon..._
- **04-with-secondary-text**: With secondary text [tags: combobox, autocomplete, search, dropdown, form-control, secondary-text, headlessui] [deps: @headlessui/react, @heroicons/react/20/solid, react]
  - _Combobox with secondary text (username) displayed inline next to primary text (name)...._

#### Form Layouts

- **01-stacked**: Stacked [tags: form, layout, stacked, multi-section, validation, responsive] [deps: @heroicons/react/24/solid, @heroicons/react/16/solid]
  - _Comprehensive stacked form layout with three sections (Profile, Personal Information, Notifications)..._
- **02-two-column**: Two-column [tags: form, layout, two-column, multi-section, responsive] [deps: @heroicons/react/24/solid, @heroicons/react/16/solid]
  - _Two-column responsive layout with description on left (1 column) and form fields on right (2 columns..._
- **03-two-column-with-cards**: Two-column with cards [tags: form, layout, two-column, cards, multi-section, responsive] [deps: @heroicons/react/24/solid, @heroicons/react/16/solid]
  - _Card-based two-column layout where each section is a separate form card with shadow and outline...._
- **04-labels-on-left**: Labels on left [tags: form, layout, horizontal, labels-left, divided, responsive] [deps: @heroicons/react/24/solid, @heroicons/react/16/solid]
  - _Horizontal label-left layout using sm:grid-cols-3 where labels are in column 1 and inputs span colum..._

#### Input Groups

- **01-input-with-label**: Input with label [tags: input, label, email, form-field] [deps: ]
  - _Simple input field with top-aligned label. Uses Tailwind v4 outline utilities..._
- **02-input-with-label-and-help-text**: Input with label and help text [tags: input, label, help-text, email, form-field] [deps: ]
  - _Input field with label and descriptive help text below. Uses aria-describedby..._
- **03-input-with-validation-error**: Input with validation error [tags: input, validation, error, email, form-field, icon] [deps: @heroicons/react/16/solid]
  - _Error state input with validation icon overlay. Uses CSS Grid with col-start-1/row-start-1..._
- **04-input-with-disabled-state**: Input with disabled state [tags: input, disabled, email, form-field] [deps: ]
  - _Disabled input field with muted styling. Uses disabled: variants for background,..._
- **05-input-with-hidden-label**: Input with hidden label [tags: input, email, form-field, minimal] [deps: ]
  - _Minimal input without visible label. Uses aria-label for accessibility while..._
- **06-input-with-corner-hint**: Input with corner hint [tags: input, label, hint, optional, email, form-field] [deps: ]
  - _Input with label and corner hint using flexbox justify-between. Hint text..._
- **07-input-with-leading-icon**: Input with leading icon [tags: input, icon, email, form-field, leading-icon] [deps: @heroicons/react/16/solid]
  - _Input with leading icon using CSS Grid overlay technique. Icon positioned at start..._
- **08-input-with-trailing-icon**: Input with trailing icon [tags: input, icon, form-field, trailing-icon, help] [deps: @heroicons/react/16/solid]
  - _Input with trailing icon using CSS Grid and justify-self-end. Icon positioned at end..._
- **09-input-with-add-on**: Input with add-on [tags: input, add-on, url, form-field, prefix] [deps: ]
  - _Input with separate leading add-on element. Uses flexbox with add-on as separate div..._
- **10-input-with-inline-add-on**: Input with inline add-on [tags: input, add-on, inline, url, form-field, prefix] [deps: ]
  - _Input with inline leading add-on. Uses flexbox wrapper with focus-within for unified..._
- **11-input-with-inline-leading-and-trailing-add-ons**: Input with inline leading and trailing add-ons [tags: input, add-on, inline, price, currency, form-field] [deps: ]
  - _Input with inline add-ons on both sides. Uses flexbox with focus-within for unified..._
- **12-input-with-inline-leading-dropdown**: Input with inline leading dropdown [tags: input, dropdown, select, phone, form-field, inline] [deps: @heroicons/react/16/solid]
  - _Input with inline leading select dropdown. Uses CSS Grid for dropdown with overlaid..._
- **13-input-with-inline-leading-add-on-and-trailing-dropdown**: Input with inline leading add-on and trailing dropdown [tags: input, add-on, dropdown, select, price, currency, form-field, inline] [deps: @heroicons/react/16/solid]
  - _Complex inline input with text add-on at start and select dropdown at end. Uses..._
- **14-input-with-leading-icon-and-trailing-button**: Input with leading icon and trailing button [tags: input, icon, button, search, form-field, action] [deps: @heroicons/react/16/solid]
  - _Input with leading icon and trailing action button. Uses flexbox with -mr-px on input..._
- **15-inputs-with-shared-borders**: Inputs with shared borders [tags: input, select, fieldset, card-form, billing, shared-borders, grouped] [deps: @heroicons/react/16/solid]
  - _Complex form with shared borders between inputs. Uses negative margins (-mt-px, -mr-px)..._
- **16-input-with-inset-label**: Input with inset label [tags: input, label, inset, floating, form-field] [deps: ]
  - _Input with inset label positioned inside the border container. Label uses smaller..._
- **17-inputs-with-inset-labels-and-shared-borders**: Inputs with inset labels and shared borders [tags: input, label, inset, shared-borders, grouped, form-field] [deps: ]
  - _Stacked inputs with inset labels sharing borders. Uses -space-y-px to collapse borders..._
- **18-input-with-overlapping-label**: Input with overlapping label [tags: input, label, overlapping, floating, form-field] [deps: ]
  - _Input with label positioned to overlap the top border. Uses absolute positioning..._
- **19-input-with-pill-shape**: Input with pill shape [tags: input, label, pill, rounded-full, form-field] [deps: ]
  - _Input with fully rounded pill shape using rounded-full. Label has matching left..._
- **20-input-with-gray-background-and-bottom-border**: Input with gray background and bottom border [tags: input, label, underline, bottom-border, gray-background, form-field] [deps: ]
  - _Input with gray background and animated bottom border only. Uses peer modifier..._
- **21-input-with-keyboard-shortcut**: Input with keyboard shortcut [tags: input, label, keyboard-shortcut, search, form-field, kbd] [deps: ]
  - _Input with keyboard shortcut badge displayed at trailing edge. Uses flexbox wrapper..._

#### Radio Groups

- **01-simple-list**: Simple list [tags: radio-group, form-control, fieldset, simple] [deps: ]
  - _Simple radio button list using native HTML radio inputs with custom Tailwind styling...._
- **02-simple-inline-list**: Simple inline list [tags: radio-group, form-control, fieldset, inline, responsive] [deps: ]
  - _Simple radio button list with responsive layout that switches from vertical stacking on mobile..._
- **03-list-with-description**: List with description [tags: radio-group, form-control, fieldset, description, aria-describedby] [deps: ]
  - _Radio group with stacked description text below each label. Uses aria-describedby to..._
- **04-list-with-inline-description**: List with inline description [tags: radio-group, form-control, fieldset, inline-description, aria-describedby] [deps: ]
  - _Similar to list with description but description appears inline with label on the same line..._
- **05-list-with-radio-on-right**: List with radio on right [tags: radio-group, form-control, fieldset, description, right-aligned, dividers] [deps: ]
  - _Radio buttons positioned on the right side with label and description on left...._
- **06-simple-list-with-radio-on-right**: Simple list with radio on right [tags: radio-group, form-control, fieldset, right-aligned, dividers, simple] [deps: ]
  - _Simplified version of radio-on-right layout without descriptions. Uses border-t and border-b..._
- **07-simple-table**: Simple table [tags: radio-group, form-control, fieldset, table-layout, grid, responsive] [deps: ]
  - _Table-like radio group using grid layout with 3 columns on desktop. Uses label elements..._
- **08-list-with-descriptions-in-panel**: List with descriptions in panel [tags: radio-group, form-control, fieldset, panel, description, has-checked] [deps: ]
  - _Radio group with panel-style layout using label elements as clickable containers...._
- **09-color-picker**: Color picker [tags: radio-group, form-control, fieldset, color-picker, visual-selection] [deps: ]
  - _Visual color picker using radio buttons styled as colored circles. Each color option..._
- **10-cards**: Cards [tags: radio-group, form-control, fieldset, cards, grid, has-checked, icon-indicator] [deps: @heroicons/react/20/solid]
  - _Card-based radio group in responsive grid layout (1 column mobile, 3 columns desktop)...._
- **11-small-cards**: Small cards [tags: radio-group, form-control, fieldset, cards, grid, compact, disabled-state] [deps: ]
  - _Compact card-based radio group in responsive grid (3 columns mobile, 6 columns desktop)...._
- **12-stacked-cards**: Stacked cards [tags: radio-group, form-control, fieldset, cards, stacked, responsive, has-checked] [deps: ]
  - _Full-width stacked card layout with responsive flex to grid transition. Cards display plan..._

#### Select Menus

- **01-simple-native**: Simple native [tags: select, dropdown, native, form-field] [deps: @heroicons/react/16/solid]
  - _Native HTML select with custom chevron icon overlay. Uses CSS Grid to position..._
- **02-simple-custom**: Simple custom [tags: select, dropdown, custom, listbox, form-field] [deps: @headlessui/react, @heroicons/react/16/solid, @heroicons/react/20/solid]
  - _Custom select using Headless UI Listbox with check mark on right. ListboxButton..._
- **03-custom-with-check-on-left**: Custom with check on left [tags: select, dropdown, custom, listbox, form-field] [deps: @headlessui/react, @heroicons/react/16/solid, @heroicons/react/20/solid]
  - _Custom select with check mark positioned on left side of options. ListboxOption..._
- **04-custom-with-status-indicator**: Custom with status indicator [tags: select, dropdown, custom, listbox, status, online, form-field] [deps: @headlessui/react, @heroicons/react/16/solid, @heroicons/react/20/solid]
  - _Custom select with colored status indicator dots. Uses classNames helper for..._
- **05-custom-with-avatar**: Custom with avatar [tags: select, dropdown, custom, listbox, avatar, user, form-field] [deps: @headlessui/react, @heroicons/react/16/solid, @heroicons/react/20/solid]
  - _Custom select with user avatar images. Button and options use flexbox with gap-3..._
- **06-with-secondary-text**: With secondary text [tags: select, dropdown, custom, listbox, secondary-text, username, form-field] [deps: @headlessui/react, @heroicons/react/16/solid, @heroicons/react/20/solid]
  - _Custom select with secondary text (username). Uses flexbox with gap-2 in button,..._
- **07-branded-with-supported-text**: Branded with supported text [tags: select, dropdown, custom, listbox, branded, split-button, description] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Branded split-button select with status display and descriptions. Uses divide-x..._

#### Sign-in and Registration

- **01-simple**: Simple [tags: sign-in, login, authentication, form, centered] [deps: ]
  - _Centered sign-in form with logo, heading, and registration link. Uses flexbox with..._
- **02-simple-no-labels**: Simple no labels [tags: sign-in, login, authentication, form, checkbox, remember-me, shared-borders] [deps: ]
  - _Sign-in form with shared border inputs (no visible labels). Uses -mt-px to collapse..._
- **03-split-screen**: Split screen [tags: sign-in, login, authentication, form, split-screen, social-login, oauth, checkbox] [deps: ]
  - _Split-screen layout with form on left and image on right. Left side uses lg:flex-none..._
- **04-simple-card**: Simple card [tags: sign-in, login, authentication, form, card, social-login, oauth, checkbox] [deps: ]
  - _Card-based sign-in form on gray background. Form contained in white card with shadow-sm..._

#### Textareas

- **01-simple**: Simple [tags: textarea, comment, form-field] [deps: ]
  - _Simple textarea with top-aligned label. Uses Tailwind v4 outline utilities for..._
- **02-with-avatar-and-actions**: With avatar and actions [tags: textarea, comment, avatar, toolbar, mood, attachment, form-field] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Comment textarea with avatar and floating toolbar. Uses focus-within for unified..._
- **03-with-underline-and-actions**: With underline and actions [tags: textarea, comment, avatar, toolbar, mood, attachment, underline, form-field] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _Comment textarea with bottom border styling instead of full outline. Uses border-b..._
- **04-with-title-and-pill-actions**: With title and pill actions [tags: textarea, title, input, toolbar, assignee, label, due-date, attachment, pill-buttons, form-field] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Combined title input and description textarea with metadata actions. Uses absolute..._
- **05-with-preview-button**: With preview button [tags: textarea, tabs, preview, markdown, toolbar, write-preview, form-field] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Textarea with Write/Preview tabs using Headless UI TabGroup. Toolbar buttons_

#### Toggles

- **01-simple-toggle**: Simple toggle [tags: toggle, switch, form-control, checkbox, animated] [deps: ]
  - _Simple toggle switch using checkbox input with custom styling. Uses has-checked pseudo-class..._
- **02-short-toggle**: Short toggle [tags: toggle, switch, form-control, checkbox, animated, compact] [deps: ]
  - _Compact toggle variant with shorter track and bordered knob. Uses absolute positioning..._
- **03-toggle-with-icon**: Toggle with icon [tags: toggle, switch, form-control, checkbox, animated, icon, svg] [deps: ]
  - _Toggle with animated icon indicators inside the knob. Uses opacity transitions to swap..._
- **04-with-left-label-and-description**: With left label and description [tags: toggle, switch, form-control, checkbox, animated, label, description] [deps: ]
  - _Toggle with label and description on the left side. Uses flex justify-between for layout..._
- **05-with-right-label**: With right label [tags: toggle, switch, form-control, checkbox, animated, label, inline-description] [deps: ]
  - _Toggle with label and inline description on the right side. Uses flex layout with gap-3..._


### Headings

#### Card Headings

- **01-simple**: Simple [tags: heading, card, simple, border] [deps: ]
  - _Minimal card heading with bottom border separator...._
- **02-with-action**: With action [tags: heading, card, action, button, responsive] [deps: ]
  - _Card heading with primary action button aligned to the right...._
- **03-with-avatar-and-actions**: With avatar and actions [tags: heading, card, avatar, actions, buttons, responsive, icons, profile] [deps: @heroicons/react/20/solid]
  - _Card heading with user avatar, name, handle, and action buttons...._
- **04-with-description-and-action**: With description and action [tags: heading, card, description, action, button, responsive] [deps: ]
  - _Card heading with descriptive text and primary action button...._
- **05-with-description**: With description [tags: heading, card, description, simple] [deps: ]
  - _Simple card heading with supporting description text...._
- **06-with-avatar-meta-and-dropdown**: With avatar, meta, and dropdown [tags: heading, card, avatar, metadata, dropdown, menu, social, profile, icons] [deps: @heroicons/react/20/solid, @headlessui/react]
  - _Social media-style card heading with avatar, user name, timestamp, and actions menu...._

#### Page Headings

- **01-with-actions**: With actions [tags: heading, page-title, actions, buttons, responsive] [deps: ]
  - _Responsive page heading with primary and secondary action buttons...._
- **02-with-actions-and-breadcrumbs**: With actions and breadcrumbs [tags: heading, page-title, breadcrumbs, navigation, actions, buttons, responsive] [deps: @heroicons/react/20/solid]
  - _Page heading with breadcrumb navigation and action buttons...._
- **03-with-meta-and-actions**: With meta and actions [tags: heading, page-title, metadata, actions, buttons, dropdown, responsive, icons] [deps: @heroicons/react/20/solid, @headlessui/react]
  - _Page heading with metadata badges and multiple action buttons...._
- **04-with-banner-image**: With banner image [tags: heading, profile, banner, avatar, actions, buttons, responsive, icons] [deps: @heroicons/react/20/solid]
  - _Profile page heading with full-width banner image and overlapping avatar...._
- **05-with-avatar-and-actions**: With avatar and actions [tags: heading, avatar, actions, buttons, responsive, profile, metadata] [deps: ]
  - _Page heading with inline avatar, name, and application metadata...._
- **06-card-with-avatar-and-stats**: Card with avatar and stats [tags: heading, card, avatar, stats, profile, dashboard, grid, responsive] [deps: ]
  - _Card-based profile heading with avatar, welcome message, and stats grid...._
- **07-with-meta-actions-and-breadcrumbs**: With meta, actions, and breadcrumbs [tags: heading, page-title, breadcrumbs, navigation, metadata, actions, buttons, dropdown, responsive, icons] [deps: @heroicons/react/20/solid, @headlessui/react]
  - _Comprehensive page heading combining breadcrumbs, title, metadata, and actions...._
- **08-with-filters-and-action**: With filters and action [tags: heading, page-title, filters, tabs, action, button, responsive, icons] [deps: @heroicons/react/20/solid]
  - _Compact page heading with inline filter tabs and primary action button...._
- **09-with-logo-meta-and-actions**: With logo, meta and actions [tags: heading, logo, avatar, metadata, actions, buttons, dropdown, responsive, icons] [deps: @heroicons/react/20/solid, @headlessui/react]
  - _Page heading with company logo, invoice metadata, and action buttons...._

#### Section Headings

- **01-simple**: Simple [tags: heading, section, simple, border] [deps: ]
  - _Minimal section heading with bottom border separator...._
- **02-with-description**: With description [tags: heading, section, description, border] [deps: ]
  - _Section heading with supporting description text...._
- **03-with-actions**: With actions [tags: heading, section, actions, buttons, responsive] [deps: ]
  - _Section heading with secondary and primary action buttons...._
- **04-with-action**: With action [tags: heading, section, action, button, responsive] [deps: ]
  - _Section heading with single primary action button...._
- **05-with-input-group**: With input group [tags: heading, section, search, input, button, input-group, responsive, icons] [deps: @heroicons/react/16/solid]
  - _Section heading with search input and sort button as connected input group...._
- **06-with-tabs**: With tabs [tags: heading, section, tabs, navigation, dropdown, responsive, icons] [deps: @heroicons/react/16/solid]
  - _Section heading with tab navigation that adapts by device...._
- **07-with-actions-and-tabs**: With actions and tabs [tags: heading, section, tabs, navigation, actions, buttons, dropdown, responsive, icons] [deps: @heroicons/react/16/solid]
  - _Section heading combining title, action buttons, and responsive tab navigation...._
- **08-with-inline-tabs**: With inline tabs [tags: heading, section, tabs, navigation, inline, responsive] [deps: ]
  - _Compact section heading with inline tab navigation...._
- **09-with-label**: With label [tags: heading, section, label, metadata, responsive] [deps: ]
  - _Section heading with inline label/context text...._
- **10-with-badge-and-dropdown**: With badge and dropdown [tags: heading, section, badge, status, dropdown, menu, metadata, responsive, icons] [deps: @heroicons/react/20/solid, @headlessui/react]
  - _Section heading with title, subtitle, status badge, and actions dropdown...._


### Layout

#### Cards

- **01-basic-card**: Basic card [tags: card, container, shadow, rounded] [deps: ]
  - _Simple card with rounded corners, white background, and subtle shadow. Responsive padding increases ..._
- **02-card-edge-to-edge-mobile**: Card, edge-to-edge on mobile [tags: card, responsive, mobile, edge-to-edge] [deps: ]
  - _Mobile-optimized card that removes rounded corners on small screens for edge-to-edge appearance. Add..._
- **03-card-with-header**: Card with header [tags: card, header, divided, sections] [deps: ]
  - _Two-section card with header and body separated by divider. Header uses less vertical padding on des..._
- **04-card-with-footer**: Card with footer [tags: card, footer, divided, sections] [deps: ]
  - _Card with body and footer sections divided by horizontal border. Footer uses reduced vertical paddin..._
- **05-card-with-header-and-footer**: Card with header and footer [tags: card, header, footer, divided, sections] [deps: ]
  - _Three-section card with header, body, and footer. Each section has optimized vertical padding: heade..._
- **06-card-with-gray-footer**: Card with gray footer [tags: card, footer, gray-background, sections] [deps: ]
  - _Card with white body and gray footer (bg-gray-50) for visual distinction. No divider needed as backg..._
- **07-card-with-gray-body**: Card with gray body [tags: card, header, gray-background, sections] [deps: ]
  - _Inverted card design with white header and gray body (bg-gray-50). Header uses reduced desktop paddi..._
- **08-well**: Well [tags: well, card, gray-background, inset] [deps: ]
  - _Well component using light gray background (bg-gray-50) without shadow for subtle, inset appearance...._
- **09-well-on-gray**: Well on gray [tags: well, card, gray-background, inset, contrast] [deps: ]
  - _Darker well using bg-gray-200 for use on gray backgrounds. Provides more contrast than bg-gray-50 wh..._
- **10-well-edge-to-edge-mobile**: Well, edge-to-edge on mobile [tags: well, card, responsive, mobile, edge-to-edge, gray-background] [deps: ]
  - _Mobile-optimized well without rounded corners on small screens. Adds rounded-lg on sm+ breakpoints. ..._

#### Containers

- **01-full-width-mobile-constrained-padded**: Full-width on mobile, constrained with padded content above [tags: container, responsive, max-width, padding] [deps: ]
  - _Responsive container that's full-width on mobile, then adds horizontal padding on sm+ breakpoints. C..._
- **02-constrained-with-padded-content**: Constrained with padded content [tags: container, responsive, max-width, padding, mobile-padding] [deps: ]
  - _Standard responsive container with padding at all breakpoints. Uses px-4 on mobile, increasing to px..._
- **03-breakpoint-constrained-padded-above-mobile**: Full-width on mobile, constrained to breakpoint with padded content above mobile [tags: container, responsive, breakpoint, padding] [deps: ]
  - _Uses Tailwind's container class for responsive max-width based on current breakpoint. Full-width on ..._
- **04-breakpoint-constrained-with-padded-content**: Constrained to breakpoint with padded content [tags: container, responsive, breakpoint, padding, mobile-padding] [deps: ]
  - _Responsive container with padding at all breakpoints using Tailwind's container class. Max-width adj..._
- **05-narrow-constrained-with-padded-content**: Narrow constrained with padded content [tags: container, responsive, nested, narrow, max-width, padding] [deps: ]
  - _Two-tier container layout with outer max-w-7xl wrapper and inner max-w-3xl constraint. Creates narro..._

#### Dividers

- **01-with-label**: With label [tags: divider, separator, label, centered] [deps: ]
  - _Horizontal divider with centered text label. Uses flex with full-width borders on each side and whit..._
- **02-with-icon**: With icon [tags: divider, separator, icon, centered] [deps: @heroicons/react/20/solid]
  - _Horizontal divider with centered icon instead of text. Icon wrapped in span with white background to..._
- **03-with-label-on-left**: With label on left [tags: divider, separator, label, left-aligned] [deps: ]
  - _Horizontal divider with left-aligned text label. Label uses pr-2 for spacing from the line. More com..._
- **04-with-title**: With title [tags: divider, separator, title, centered, heading] [deps: ]
  - _Divider with centered section title using larger, bold text. Uses base font size and semibold weight..._
- **05-with-title-on-left**: With title on left [tags: divider, separator, title, left-aligned, heading] [deps: ]
  - _Left-aligned section title with divider line extending to the right. Bold text with pr-3 spacing. Id..._
- **06-with-button**: With button [tags: divider, separator, button, action, centered] [deps: @heroicons/react/20/solid]
  - _Interactive divider with centered action button. Button uses rounded-full styling with icon and whit..._
- **07-with-title-and-button**: With title and button [tags: divider, separator, title, button, action] [deps: @heroicons/react/20/solid]
  - _Composite divider with left-aligned title and right-aligned action button. Uses justify-between to s..._
- **08-with-toolbar**: With toolbar [tags: divider, separator, toolbar, button-group, actions] [deps: @heroicons/react/20/solid]
  - _Divider with centered button group toolbar. Uses icon-only buttons in a segmented group with negativ..._

#### List Containers

- **01-simple-with-dividers**: Simple with dividers [tags: list, dividers, simple] [deps: ]
  - _Basic list container with horizontal dividers between items. Uses divide-y utility for automatic bor..._
- **02-card-with-dividers**: Card with dividers [tags: list, card, dividers, shadow] [deps: ]
  - _List wrapped in card container with shadow and rounded corners. Dividers separate items within the c..._
- **03-card-with-dividers-full-width-mobile**: Card with dividers, full-width on mobile [tags: list, card, dividers, responsive, mobile, edge-to-edge] [deps: ]
  - _Mobile-optimized list card without rounded corners on small screens. Responsive padding adjusts from..._
- **04-separate-cards**: Separate cards [tags: list, card, separated, stacked] [deps: ]
  - _List with each item as a separate card. Uses space-y-3 for vertical spacing between cards. Each card..._
- **05-separate-cards-full-width-mobile**: Separate cards, full-width on mobile [tags: list, card, separated, responsive, mobile, edge-to-edge] [deps: ]
  - _Separated card list optimized for mobile. Cards are edge-to-edge on small screens, adding rounded-md..._
- **06-flat-card-with-dividers**: Flat card with dividers [tags: list, card, dividers, border, flat] [deps: ]
  - _Flat card design using border instead of shadow for subtle elevation. Border and dividers use matchi..._
- **07-simple-with-dividers-full-width-mobile**: Simple with dividers, full-width on mobile [tags: list, dividers, responsive, mobile, simple] [deps: ]
  - _Simple divided list with responsive padding. Adds horizontal padding (px-4) on mobile, removes it (p..._

#### Media Objects

- **01-basic**: Basic [tags: media-object, flex, image-text] [deps: ]
  - _Classic media object pattern with image/icon on left and content on right. Uses flex with shrink-0 t..._
- **02-aligned-to-center**: Aligned to center [tags: media-object, flex, centered, image-text] [deps: ]
  - _Media object with vertically centered media element. Uses self-center on the media container to alig..._
- **03-aligned-to-bottom**: Aligned to bottom [tags: media-object, flex, bottom-aligned, image-text] [deps: ]
  - _Media object with bottom-aligned media element. Uses self-end to align the media with the bottom of ..._
- **04-stretched-to-fit**: Stretched to fit [tags: media-object, flex, stretched, full-height, image-text] [deps: ]
  - _Media object with media stretched to match content height. Uses h-full to make the media element exp..._
- **05-media-on-right**: Media on right [tags: media-object, flex, reversed, image-text] [deps: ]
  - _Reversed media object with content on left and media on right. Changes margin from mr-4 to ml-4. Use..._
- **06-basic-responsive**: Basic responsive [tags: media-object, responsive, mobile, stacked, image-text] [deps: ]
  - _Responsive media object that stacks vertically on mobile and horizontally on sm+. Uses sm:flex to en..._
- **07-wide-responsive**: Wide responsive [tags: media-object, responsive, mobile, full-width, image-text] [deps: ]
  - _Responsive media object with full-width media on mobile. Media spans full width (w-full) on mobile, ..._
- **08-nested**: Nested [tags: media-object, nested, hierarchical, threaded, image-text] [deps: ]
  - _Hierarchical media object pattern with nested child media objects. Parent uses size-16 media, childr..._


### Lists

#### Feeds

- **01-simple-with-icons**: Simple with icons [tags: timeline, feed, activity, icons, list] [deps: @heroicons/react/20/solid]
  - _Vertical timeline feed with icon badges and connecting lines. Uses flow-root for clearfix behavior..._
- **02-with-comments**: With comments [tags: timeline, feed, activity, comments, form, avatars, mood-selector] [deps: @heroicons/react/24/solid, @heroicons/react/20/solid, @headlessui/react]
  - _Activity feed with comment cards and inline comment form. Features different layouts for comment..._
- **03-with-multiple-item-types**: With multiple item types [tags: timeline, feed, activity, comments, assignments, tags, avatars, mixed-content] [deps: @heroicons/react/20/solid]
  - _Activity feed supporting multiple item types (comments, assignments, tags) with conditional renderin..._

#### Grid Lists

- **01-contact-cards-with-small-portraits**: Contact cards with small portraits [tags: grid, cards, contacts, avatars, responsive, actions] [deps: @heroicons/react/20/solid]
  - _Responsive grid layout that adapts from 1 column on mobile to 3 columns on large screens...._
- **02-contact-cards**: Contact cards [tags: grid, cards, contacts, avatars, centered, responsive, actions] [deps: @heroicons/react/20/solid]
  - _Centered contact cards with large avatars (32x32) and responsive grid from 1 to 4 columns...._
- **03-simple-cards**: Simple cards [tags: grid, cards, projects, initials, responsive, actions] [deps: @heroicons/react/20/solid]
  - _Horizontal split cards with colored initial badges on the left and content on the right...._
- **04-horizontal-link-cards**: Horizontal link cards [tags: grid, cards, links, avatars, responsive, hover] [deps: ]
  - _Simple 2-column responsive grid with horizontal link cards...._
- **05-actions-with-shared-borders**: Actions with shared borders [tags: grid, cards, actions, icons, responsive, borders] [deps: @heroicons/react/24/outline]
  - _Two-column grid with shared borders between cards using divide utilities and conditional border clas..._
- **06-images-with-details**: Images with details [tags: grid, images, gallery, responsive, hover] [deps: ]
  - _Image gallery grid with responsive columns (2 → 3 → 4) and varying gap sizes...._
- **07-logos-cards-with-description-list**: Logos cards with description list [tags: grid, cards, logos, invoices, menu, responsive, badges] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Client invoice cards with logo headers and description list content...._

#### Stacked Lists

- **01-simple**: Simple [tags: list, people, avatar, status-indicator, responsive] [deps: ]
  - _Clean stacked list with avatars, user details, and online status indicators...._
- **02-with-links**: With links [tags: list, people, avatar, clickable, status-indicator, chevron, responsive] [deps: @heroicons/react/20/solid]
  - _Interactive stacked list with clickable rows using absolute positioning technique...._
- **03-with-inline-links-and-avatar-group**: With inline links and avatar group [tags: list, discussions, avatar-group, inline-links, status-icon, comments, responsive] [deps: @heroicons/react/24/outline]
  - _Discussion list with inline author/date links and overlapping avatar groups...._
- **04-with-inline-links-and-actions-menu**: With inline links and actions menu [tags: list, people, avatar, dropdown-menu, inline-links, status-indicator, actions, responsive] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Interactive people list with inline name/email links and actions dropdown menu...._
- **05-with-badges-button-and-actions-menu**: With badges, button, and actions menu [tags: list, projects, badges, status, dropdown-menu, actions, button, responsive] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Project list with colored status badges (In progress, Complete, Archived)...._
- **06-in-card-with-links**: In card with links [tags: list, people, avatar, card, clickable, status-indicator, chevron, responsive, hover] [deps: @heroicons/react/20/solid]
  - _Card-contained people list with clickable rows and hover states...._
- **07-two-columns-with-links**: Two columns with links [tags: list, people, avatar, two-column, clickable, status-indicator, chevron, responsive] [deps: @heroicons/react/20/solid]
  - _Two-column layout with equal-width sections on desktop (sm:w-1/2)...._
- **08-full-width-with-links**: Full width with links [tags: list, people, avatar, full-width, clickable, status-indicator, chevron, hover, responsive] [deps: @heroicons/react/20/solid]
  - _Full-width list with responsive padding (increases from mobile to desktop)...._
- **09-full-width-with-constrained-content**: Full-width with constrained content [tags: list, people, avatar, full-width, constrained, max-width, clickable, status-indicator, chevron, hover, responsive] [deps: @heroicons/react/20/solid]
  - _Full-width list with content constrained to max-w-4xl container...._
- **10-narrow**: Narrow [tags: list, people, avatar, narrow, compact, minimal] [deps: ]
  - _Minimal, narrow list layout with just avatar, name, and email...._
- **11-narrow-with-sticky-headings**: Narrow with sticky headings [tags: list, people, avatar, narrow, sticky-headers, alphabetical, directory, scrollable, grouped] [deps: ]
  - _Alphabetically grouped directory with sticky section headings...._
- **12-narrow-with-actions**: Narrow with actions [tags: list, people, avatar, narrow, actions, button, cta] [deps: ]
  - _Narrow list with individual "View" action buttons on each row...._
- **13-narrow-with-truncated-content**: Narrow with truncated content [tags: list, comments, avatar, narrow, truncated, line-clamp, timestamp] [deps: ]
  - _Comment list with truncated content using line-clamp-2 for two-line preview...._
- **14-narrow-with-small-avatars**: Narrow with small avatars [tags: list, activity, avatar, narrow, small-avatar, git, commits, timestamp, compact] [deps: ]
  - _Compact activity feed with small 6x6 avatars and truncated content...._
- **15-narrow-with-badges**: Narrow with badges [tags: list, deployments, badges, status-indicator, clickable, chevron, environment] [deps: @heroicons/react/20/solid]
  - _Deployment list with colored status indicators (offline, online, error) and environment badges...._

#### Tables

- **01-simple**: Simple [tags: table, data-table, users, simple, responsive, overflow] [deps: ]
  - _Basic data table with header, edit actions, and "Add user" button...._
- **02-simple-in-card**: Simple in card [tags: table, data-table, users, card, rounded, background, responsive, overflow] [deps: ]
  - _Data table wrapped in a card container with rounded corners and outline border...._
- **03-full-width**: Full width [tags: table, data-table, users, full-width, responsive, overflow] [deps: ]
  - _Full-width table with responsive padding that scales across breakpoints...._
- **04-full-width-with-constrained-content**: Full width with constrained content [tags: table, data-table, users, full-width, constrained, max-width, responsive, progressive-disclosure] [deps: ]
  - _Table with content constrained to max-w-7xl while borders extend full viewport width...._
- **05-with-striped-rows**: With striped rows [tags: table, data-table, users, striped, zebra, alternating, responsive, overflow] [deps: ]
  - _Data table with alternating row backgrounds using even:bg-gray-800/50...._
- **06-with-uppercase-headings**: With uppercase headings [tags: table, data-table, users, uppercase, headers, responsive, overflow] [deps: ]
  - _Data table with uppercase column headers using text-transform and tracking...._
- **07-with-stacked-columns-on-mobile**: With stacked columns on mobile [tags: table, data-table, users, responsive, stacked, mobile-first, progressive-disclosure, description-list] [deps: ]
  - _Responsive table that stacks columns under the Name cell on mobile/tablet...._
- **08-with-hidden-columns-on-mobile**: With hidden columns on mobile [tags: table, data-table, users, responsive, hidden, progressive-disclosure, mobile-first] [deps: ]
  - _Responsive table that progressively hides less critical columns on smaller screens...._
- **09-with-avatars-and-multi-line-content**: With avatars and multi-line content [tags: table, data-table, users, avatars, multi-line, badges, status, responsive, overflow] [deps: ]
  - _Rich data table with avatars and multi-line cells showing secondary information...._
- **10-with-sticky-header**: With sticky header [tags: table, data-table, users, sticky, fixed-header, scrollable, backdrop-blur, responsive, progressive-disclosure] [deps: ]
  - _Table with sticky header that remains visible during scroll using position: sticky...._
- **11-with-vertical-lines**: With vertical lines [tags: table, data-table, users, vertical-borders, grid, responsive, overflow] [deps: ]
  - _Table with vertical divider lines between columns using divide-x utility...._
- **12-with-condensed-content**: With condensed content [tags: table, data-table, transactions, condensed, compact, dense, financial, responsive, overflow] [deps: ]
  - _Compact table with reduced padding for dense data display (py-2, px-2)...._
- **13-with-sortable-headings**: With sortable headings [tags: table, data-table, users, sortable, interactive, chevron, responsive, overflow] [deps: @heroicons/react/20/solid]
  - _Interactive table with sortable column headers using clickable links...._
- **14-with-grouped-rows**: With grouped rows [tags: table, data-table, users, grouped, categories, sections, subheadings, responsive, overflow] [deps: ]
  - _Table with grouped rows organized by location/category using Fragment wrapper...._
- **15-with-summary-rows**: With summary rows [tags: table, data-table, invoice, summary, footer, totals, financial, responsive, multi-line] [deps: ]
  - _Invoice-style table with tfoot summary rows (Subtotal, Tax, Total)...._
- **16-with-border**: With border [tags: table, data-table, plans, pricing, bordered, rounded, ring, responsive, progressive-disclosure, multi-line] [deps: ]
  - _Table with ring-1 border and rounded corners (sm:rounded-lg)...._
- **17-with-checkboxes**: With checkboxes [tags: table, data-table, users, checkboxes, selection, bulk-actions, interactive, stateful, indeterminate, responsive, overflow] [deps: ]
  - _Interactive table with row selection via checkboxes and bulk action toolbar...._
- **18-with-hidden-headings**: With hidden headings [tags: table, data-table, transactions, activity-feed, grouped, timeline, badges, status, hidden-headers, constrained, multi-line, responsive] [deps: @heroicons/react/20/solid]
  - _Activity feed style table with sr-only thead for accessibility without visual headers...._
- **19-full-width-with-avatars**: Full width with avatars [tags: table, data-table, activity, avatars, deployment, status-indicator, badges, full-width, responsive, progressive-disclosure] [deps: ]
  - _Full-width activity table with avatars and deployment information...._


### Navigation

#### Breadcrumbs

- **01-contained**: Contained [tags: breadcrumbs, navigation, dark, contained, home-icon, separator] [deps: @heroicons/react/20/solid]
  - _Dark breadcrumb navigation with contained layout using rounded bg-gray-800/50 with outline...._
- **02-full-width-bar**: Full-width bar [tags: breadcrumbs, navigation, dark, full-width, home-icon, separator, responsive] [deps: @heroicons/react/20/solid]
  - _Full-width dark breadcrumb bar with bg-gray-800/50 and bottom border...._
- **03-simple-with-chevrons**: Simple with chevrons [tags: breadcrumbs, navigation, dark, simple, home-icon, chevron] [deps: @heroicons/react/20/solid]
  - _Simple dark breadcrumb navigation without background container...._
- **04-simple-with-slashes**: Simple with slashes [tags: breadcrumbs, navigation, dark, simple, home-icon, slash-separator] [deps: @heroicons/react/20/solid]
  - _Simple dark breadcrumb navigation using custom SVG slash separators...._

#### Navbars

- **01-simple-dark-menu-left**: Simple dark with menu button on left [tags: navigation, navbar, dark, responsive, mobile-menu] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Mobile menu button positioned on left...._
- **02-dark-quick-action**: Dark with quick action [tags: navigation, navbar, dark, responsive, mobile-menu, cta] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _Includes prominent CTA button (New Job) with PlusIcon...._
- **03-simple-dark**: Simple dark [tags: navigation, navbar, dark, responsive, mobile-menu] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Minimal navbar with no dynamic data arrays...._
- **04-simple-menu-left**: Simple with menu button on left [tags: navigation, navbar, dark, responsive, mobile-menu, underline] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Desktop nav uses bottom border (border-b-2) for active state...._
- **05-simple**: Simple [tags: navigation, navbar, dark, responsive, mobile-menu, underline] [deps: @headlessui/react, @heroicons/react/24/outline]
  - _Desktop nav uses bottom border (border-b-2) for active state...._
- **06-with-quick-action**: With quick action [tags: navigation, navbar, dark, responsive, mobile-menu, underline, cta] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _Desktop nav uses bottom border (border-b-2) for active state...._
- **07-dark-with-search**: Dark with search [tags: navigation, navbar, dark, search, responsive, mobile-menu, profile-dropdown, notifications] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Dark navbar with integrated search bar. Uses semi-transparent gray-800 background with subtle bottom..._
- **08-with-search**: With search [tags: navigation, navbar, dark, search, responsive, mobile-menu, profile-dropdown, notifications, bottom-border] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Dark navbar with bottom border indicator navigation. Desktop navigation uses inline bottom borders (..._
- **09-dark-with-centered-search-and-secondary-links**: Dark with centered search and secondary links [tags: navigation, navbar, dark, search, responsive, mobile-menu, profile-dropdown, notifications, secondary-nav, two-row] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Two-row dark navbar with centered search and secondary navigation row. Desktop layout uses divide-y ..._
- **10-with-centered-search-and-secondary-links**: With centered search and secondary links [tags: navigation, navbar, dark, search, responsive, mobile-menu, profile-dropdown, notifications, secondary-nav, two-row] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Two-row dark navbar with centered search and secondary navigation. Similar to variant 09 but with li..._
- **11-with-search-in-column-layout**: With search in column layout [tags: navigation, navbar, dark, search, responsive, mobile-menu, profile-dropdown, notifications, cta-button, grid-layout, popover] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Dark navbar with 12-column grid layout and CTA button. Uses Popover instead of Disclosure for mobile..._

#### Pagination

- **01-card-footer-with-page-buttons**: Card footer with page buttons [tags: pagination, navigation, dark, responsive, card-footer] [deps: @heroicons/react/20/solid]
  - _Dark-themed pagination component designed for card footers with border-top separator...._
- **02-centered-page-numbers**: Centered page numbers [tags: pagination, navigation, dark, centered, border-top] [deps: @heroicons/react/20/solid]
  - _Dark-themed pagination with centered page numbers and border-top hover states...._
- **03-simple-card-footer**: Simple card footer [tags: pagination, navigation, dark, simple, card-footer, minimal] [deps: ]
  - _Minimal dark-themed pagination for card footers with just Previous/Next buttons...._

#### Progress Bars

- **01-simple**: Simple [tags: progress, steps, navigation, dark, responsive, multi-step] [deps: ]
  - _Dark multi-step progress indicator with responsive layout switching...._
- **02-panels**: Panels [tags: progress, steps, navigation, dark, responsive, multi-step, panels, arrows] [deps: @heroicons/react/24/solid]
  - _Dark paneled multi-step progress with rounded border container and dividers...._
- **03-bullets**: Bullets [tags: progress, steps, navigation, dark, bullets, compact, multi-step] [deps: ]
  - _Compact dark bullet-style progress indicator with step counter text...._
- **04-panels-with-border**: Panels with border [tags: progress, steps, navigation, dark, responsive, multi-step, panels, descriptions, bordered] [deps: @heroicons/react/24/solid]
  - _Dark paneled progress with detailed step descriptions and responsive border layout...._
- **05-circles**: Circles [tags: progress, steps, navigation, dark, circles, compact, multi-step, connected] [deps: @heroicons/react/20/solid]
  - _Dark circular progress indicator with connecting lines between steps...._
- **06-bullets-and-text**: Bullets and text [tags: progress, steps, navigation, dark, bullets, vertical, text-labels, multi-step] [deps: @heroicons/react/20/solid]
  - _Dark vertical progress indicator with bullets and text labels stacked vertically...._
- **07-circles-with-text**: Circles with text [tags: progress, steps, navigation, dark, circles, vertical, descriptions, connected, multi-step] [deps: @heroicons/react/20/solid]
  - _Dark vertical progress with circular indicators, connecting lines, and detailed descriptions...._
- **08-progress-bar**: Progress bar [tags: progress, bar, navigation, dark, percentage, steps, horizontal, responsive] [deps: ]
  - _Dark horizontal progress bar with percentage-based fill and step labels...._

#### Sidebar Navigation

- **01-light**: Light [tags: sidebar, navigation, dark, logo, profile, teams, grouped, full-height] [deps: @heroicons/react/24/outline]
  - _Full-height dark sidebar with bg-gray-900 and border-right, includes before pseudo-element overlay (..._
- **02-dark**: Dark [tags: sidebar, navigation, dark, logo, profile, teams, grouped, full-height] [deps: @heroicons/react/24/outline]
  - _Full-height dark sidebar with bg-gray-900, border-right in before pseudo-element along with bg-black..._
- **03-with-expandable-sections**: With expandable sections [tags: sidebar, navigation, dark, expandable, disclosure, nested, logo, profile, collapsible] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _Dark sidebar with collapsible navigation sections using HeadlessUI Disclosure component...._
- **04-with-secondary-navigation**: With secondary navigation [tags: sidebar, navigation, dark, expandable, disclosure, nested, icons, logo, profile, collapsible, secondary-navigation] [deps: @headlessui/react, @heroicons/react/20/solid, @heroicons/react/24/outline]
  - _Dark sidebar combining icons with expandable sections using HeadlessUI Disclosure...._
- **05-brand**: Brand [tags: sidebar, navigation, brand, indigo, logo, profile, teams, grouped, full-height, colored] [deps: @heroicons/react/24/outline]
  - _Full-height branded sidebar with bg-indigo-800 and indigo color scheme throughout...._

#### Tabs

- **01-tabs-underline**: Tabs with underline [tags: navigation, tabs] [deps: @heroicons/react/16/solid]
  - _Replace brand color classes as needed._
- **02-tabs-underline-icons**: Tabs with underline and icons [tags: navigation, tabs, icons, responsive] [deps: @heroicons/react/16/solid, @heroicons/react/20/solid]
  - _Replace brand color classes as needed...._
- **03-tabs-pills**: Tabs in pills [tags: navigation, tabs, pills, responsive] [deps: @heroicons/react/16/solid]
  - _Replace brand color classes as needed...._
- **04-tabs-pills-gray**: Tabs in pills on gray [tags: navigation, tabs, pills, responsive] [deps: @heroicons/react/16/solid]
  - _Replace brand color classes as needed...._
- **05-tabs-pills-brand**: Tabs in pills with brand color [tags: navigation, tabs, pills, responsive, brand] [deps: @heroicons/react/16/solid]
  - _Active tab uses brand color (indigo-500/20 bg with indigo-300 text)...._
- **06-full-width-underline**: Full-width tabs with underline [tags: navigation, tabs, full-width, responsive] [deps: @heroicons/react/16/solid]
  - _Each tab uses w-1/4 to fill equal width...._
- **07-bar-underline**: Bar with underline [tags: navigation, tabs, bar, responsive] [deps: @heroicons/react/16/solid]
  - _Tabs in a contained bar with dividers and rounded corners...._
- **08-tabs-underline-badges**: Tabs with underline and badges [tags: navigation, tabs, badges, responsive, counts] [deps: @heroicons/react/16/solid]
  - _Tabs with optional count badges...._
- **09-simple**: Simple [tags: navigation, tabs, simple, responsive] [deps: @heroicons/react/16/solid]
  - _Minimal tab design with no underline or pills...._

#### Vertical Navigation

- **01-simple**: Simple [tags: vertical-navigation, sidebar, navigation, dark, simple] [deps: ]
  - _Minimal dark-themed vertical navigation for sidebars with active state highlighting...._
- **02-with-badges**: With badges [tags: vertical-navigation, sidebar, navigation, dark, badges, count] [deps: ]
  - _Dark vertical navigation with optional count badges aligned to the right...._
- **03-with-icons-and-badges**: With icons and badges [tags: vertical-navigation, sidebar, navigation, dark, icons, badges, count] [deps: @heroicons/react/24/outline]
  - _Dark vertical navigation combining icons, labels, and optional count badges...._
- **04-with-icons**: With icons [tags: vertical-navigation, sidebar, navigation, dark, icons] [deps: @heroicons/react/24/outline]
  - _Dark vertical navigation with icons and text labels, no badges...._
- **05-with-secondary-navigation**: With secondary navigation [tags: vertical-navigation, sidebar, navigation, dark, icons, badges, secondary-navigation, grouped] [deps: @heroicons/react/24/outline]
  - _Dark vertical navigation with two distinct sections: primary nav with icons/badges and secondary nav..._
- **06-on-gray**: On gray [tags: vertical-navigation, sidebar, navigation, dark, icons, badges, secondary-navigation, gray-background, grouped] [deps: @heroicons/react/24/outline]
  - _Dark vertical navigation optimized for gray backgrounds with adjusted badge colors...._


### Overlays

#### Drawers

- **01-empty**: Empty [tags: drawer, slide-over, overlay, panel] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Basic right-side drawer with slide-in animation. Features translate-x transform..._
- **02-wide-empty**: Wide empty [tags: drawer, slide-over, overlay, panel, wide] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Wide drawer variant with max-w-2xl width. Same structure as basic drawer..._
- **03-with-background-overlay**: With background overlay [tags: drawer, slide-over, overlay, panel, backdrop] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Drawer with semi-transparent backdrop overlay. DialogBackdrop animates opacity..._
- **04-with-close-button-on-outside**: With close button on outside [tags: drawer, slide-over, overlay, panel, backdrop, external-close] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Drawer with close button positioned outside panel on dark backdrop. Uses..._
- **05-with-branded-header**: With branded header [tags: drawer, slide-over, overlay, panel, branded, header] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Drawer with branded indigo header section. Header includes title, description,..._
- **06-with-sticky-footer**: With sticky footer [tags: drawer, slide-over, overlay, panel, sticky-footer, actions] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Drawer with sticky footer containing action buttons. Uses divide-y for visual..._
- **07-create-project-form-example**: Create project form example [tags: drawer, slide-over, overlay, form, project, branded-header] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid, react]
  - _Full project creation form in drawer with branded header. Features text inputs,..._
- **08-wide-create-project-form-example**: Wide create project form example [tags: drawer, slide-over, overlay, form, project, wide, grid-layout] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid, react]
  - _Wide drawer (max-w-2xl) with project creation form using grid layout. Features..._
- **09-user-profile-example**: User profile example [tags: drawer, slide-over, overlay, profile, user, menu] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid, react]
  - _User profile drawer with cover image, avatar, status indicator, action buttons,..._

#### Modal Dialogs

- **01-centered-with-single-action**: Centered with single action [tags: modal, dialog, overlay, centered, success] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Success-style centered modal with single action button. Features animated..._
- **02-centered-with-wide-buttons**: Centered with wide buttons [tags: modal, dialog, overlay, centered, grid-layout, two-button] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Success-style modal with two-button grid layout. Uses grid-flow-row-dense..._
- **03-simple-alert**: Simple alert [tags: modal, dialog, overlay, alert, destructive, warning] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Destructive alert modal with red warning icon. Features left-aligned content..._
- **04-simple-with-dismiss-button**: Simple with dismiss button [tags: modal, dialog, overlay, alert, dismissible, close-button] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Destructive alert modal with close button in top-right corner. Uses absolute..._
- **05-simple-with-gray-footer**: Simple with gray footer [tags: modal, dialog, overlay, alert, footer, destructive] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Destructive alert modal with visually separated gray footer section. Content..._
- **06-simple-alert-with-left-aligned-buttons**: Simple alert with left-aligned buttons [tags: modal, dialog, overlay, alert, left-aligned, destructive] [deps: @headlessui/react, @heroicons/react/24/outline, react]
  - _Destructive alert modal with left-aligned action buttons positioned below icon...._

#### Notifications

- **01-simple**: Simple [tags: notification, toast, success, dismissible, transition] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _|-_
- **02-condensed**: Condensed [tags: notification, toast, undo, compact, dismissible, transition] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _|-_
- **03-with-actions-below**: With actions below [tags: notification, toast, actions, multi-action, dismissible, transition] [deps: @headlessui/react, @heroicons/react/24/outline, @heroicons/react/20/solid]
  - _|-_
- **04-with-avatar**: With avatar [tags: notification, toast, avatar, message, action-button, transition] [deps: @headlessui/react]
  - _|-_
- **05-with-split-buttons**: With split buttons [tags: notification, toast, split-buttons, permission, multi-action, transition] [deps: @headlessui/react]
  - _|-_
- **06-with-buttons-below**: With buttons below [tags: notification, toast, avatar, invite, multi-button, dismissible, transition] [deps: @headlessui/react, @heroicons/react/20/solid]
  - _|-_


---

## Tag Index

Components organized by tags for quick discovery.

### action (7 components)

- Forms / Input Groups / 14-input-with-leading-icon-and-trailing-button
- Headings / Card Headings / 02-with-action
- Headings / Card Headings / 04-with-description-and-action
- Headings / Page Headings / 08-with-filters-and-action
- Headings / Section Headings / 04-with-action
- Layout / Dividers / 06-with-button
- Layout / Dividers / 07-with-title-and-button

### action-button (1 components)

- Overlays / Notifications / 04-with-avatar

### action-panel (8 components)

- Forms / Action Panels / 01-simple
- Forms / Action Panels / 02-with-link
- Forms / Action Panels / 03-with-button-on-right
- Forms / Action Panels / 04-with-button-at-top-right
- Forms / Action Panels / 05-with-toggle
- Forms / Action Panels / 06-with-input
- Forms / Action Panels / 07-simple-well
- Forms / Action Panels / 08-with-well

### actions (22 components)

- Elements / Button Groups / 04-with-dropdown
- Feedback / Alerts / 03-with-actions
- Headings / Card Headings / 03-with-avatar-and-actions
- Headings / Page Headings / 01-with-actions
- Headings / Page Headings / 02-with-actions-and-breadcrumbs
- Headings / Page Headings / 03-with-meta-and-actions
- Headings / Page Headings / 04-with-banner-image
- Headings / Page Headings / 05-with-avatar-and-actions
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Headings / Page Headings / 09-with-logo-meta-and-actions
- Headings / Section Headings / 03-with-actions
- Headings / Section Headings / 07-with-actions-and-tabs
- Layout / Dividers / 08-with-toolbar
- Lists / Grid Lists / 01-contact-cards-with-small-portraits
- Lists / Grid Lists / 02-contact-cards
- Lists / Grid Lists / 03-simple-cards
- Lists / Grid Lists / 05-actions-with-shared-borders
- Lists / Stacked Lists / 04-with-inline-links-and-actions-menu
- Lists / Stacked Lists / 05-with-badges-button-and-actions-menu
- Lists / Stacked Lists / 12-narrow-with-actions
- Overlays / Drawers / 06-with-sticky-footer
- Overlays / Notifications / 03-with-actions-below

### activity (5 components)

- Lists / Feeds / 01-simple-with-icons
- Lists / Feeds / 02-with-comments
- Lists / Feeds / 03-with-multiple-item-types
- Lists / Stacked Lists / 14-narrow-with-small-avatars
- Lists / Tables / 19-full-width-with-avatars

### activity-feed (1 components)

- Lists / Tables / 18-with-hidden-headings

### add-on (4 components)

- Forms / Input Groups / 09-input-with-add-on
- Forms / Input Groups / 10-input-with-inline-add-on
- Forms / Input Groups / 11-input-with-inline-leading-and-trailing-add-ons
- Forms / Input Groups / 13-input-with-inline-leading-add-on-and-trailing-dropdown

### alert (10 components)

- Feedback / Alerts / 01-with-description
- Feedback / Alerts / 02-with-list
- Feedback / Alerts / 03-with-actions
- Feedback / Alerts / 04-with-link-on-right
- Feedback / Alerts / 05-with-accent-border
- Feedback / Alerts / 06-with-dismiss-button
- Overlays / Modal Dialogs / 03-simple-alert
- Overlays / Modal Dialogs / 04-simple-with-dismiss-button
- Overlays / Modal Dialogs / 05-simple-with-gray-footer
- Overlays / Modal Dialogs / 06-simple-alert-with-left-aligned-buttons

### alphabetical (1 components)

- Lists / Stacked Lists / 11-narrow-with-sticky-headings

### alternating (1 components)

- Lists / Tables / 05-with-striped-rows

### animated (5 components)

- Forms / Toggles / 01-simple-toggle
- Forms / Toggles / 02-short-toggle
- Forms / Toggles / 03-toggle-with-icon
- Forms / Toggles / 04-with-left-label-and-description
- Forms / Toggles / 05-with-right-label

### app-shell (9 components)

- Application Shells / Stacked Layouts / 01-with-bottom-border
- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap

### aria-describedby (2 components)

- Forms / Radio Groups / 03-list-with-description
- Forms / Radio Groups / 04-list-with-inline-description

### arrows (1 components)

- Navigation / Progress Bars / 02-panels

### aside (4 components)

- Application Shells / Multi-Column Layouts / 01-full-width-three-column
- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right
- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header

### assignee (1 components)

- Forms / Textareas / 04-with-title-and-pill-actions

### assignments (1 components)

- Lists / Feeds / 03-with-multiple-item-types

### attachment (3 components)

- Forms / Textareas / 02-with-avatar-and-actions
- Forms / Textareas / 03-with-underline-and-actions
- Forms / Textareas / 04-with-title-and-pill-actions

### attachments (5 components)

- Data Display / Description Lists / 01-left-aligned
- Data Display / Description Lists / 02-left-aligned-in-card
- Data Display / Description Lists / 03-left-aligned-striped
- Data Display / Description Lists / 04-two-column
- Data Display / Description Lists / 05-left-aligned-with-inline-actions

### authentication (4 components)

- Forms / Sign-in and Registration / 01-simple
- Forms / Sign-in and Registration / 02-simple-no-labels
- Forms / Sign-in and Registration / 03-split-screen
- Forms / Sign-in and Registration / 04-simple-card

### autocomplete (4 components)

- Forms / Comboboxes / 01-simple
- Forms / Comboboxes / 02-with-status-indicator
- Forms / Comboboxes / 03-with-image
- Forms / Comboboxes / 04-with-secondary-text

### avatar (35 components)

- Elements / Avatars / 01-circular-avatars
- Elements / Avatars / 02-rounded-avatars
- Elements / Avatars / 03-circular-with-top-notification
- Elements / Avatars / 04-rounded-with-top-notification
- Elements / Avatars / 05-circular-with-bottom-notification
- Elements / Avatars / 06-rounded-with-bottom-notification
- Elements / Avatars / 07-circular-with-placeholder-icon
- Elements / Avatars / 08-circular-with-placeholder-initials
- Elements / Avatars / 09-avatar-group-stacked-bottom-to-top
- Elements / Avatars / 10-avatar-group-stacked-top-to-bottom
- Elements / Avatars / 11-with-text
- Forms / Comboboxes / 03-with-image
- Forms / Select Menus / 05-custom-with-avatar
- Forms / Textareas / 02-with-avatar-and-actions
- Forms / Textareas / 03-with-underline-and-actions
- Headings / Card Headings / 03-with-avatar-and-actions
- Headings / Card Headings / 06-with-avatar-meta-and-dropdown
- Headings / Page Headings / 04-with-banner-image
- Headings / Page Headings / 05-with-avatar-and-actions
- Headings / Page Headings / 06-card-with-avatar-and-stats
- Headings / Page Headings / 09-with-logo-meta-and-actions
- Lists / Stacked Lists / 01-simple
- Lists / Stacked Lists / 02-with-links
- Lists / Stacked Lists / 04-with-inline-links-and-actions-menu
- Lists / Stacked Lists / 06-in-card-with-links
- Lists / Stacked Lists / 07-two-columns-with-links
- Lists / Stacked Lists / 08-full-width-with-links
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Stacked Lists / 10-narrow
- Lists / Stacked Lists / 11-narrow-with-sticky-headings
- Lists / Stacked Lists / 12-narrow-with-actions
- Lists / Stacked Lists / 13-narrow-with-truncated-content
- Lists / Stacked Lists / 14-narrow-with-small-avatars
- Overlays / Notifications / 04-with-avatar
- Overlays / Notifications / 06-with-buttons-below

### avatar-group (3 components)

- Elements / Avatars / 09-avatar-group-stacked-bottom-to-top
- Elements / Avatars / 10-avatar-group-stacked-top-to-bottom
- Lists / Stacked Lists / 03-with-inline-links-and-avatar-group

### avatars (7 components)

- Lists / Feeds / 02-with-comments
- Lists / Feeds / 03-with-multiple-item-types
- Lists / Grid Lists / 01-contact-cards-with-small-portraits
- Lists / Grid Lists / 02-contact-cards
- Lists / Grid Lists / 04-horizontal-link-cards
- Lists / Tables / 09-with-avatars-and-multi-line-content
- Lists / Tables / 19-full-width-with-avatars

### backdrop (2 components)

- Overlays / Drawers / 03-with-background-overlay
- Overlays / Drawers / 04-with-close-button-on-outside

### backdrop-blur (1 components)

- Lists / Tables / 10-with-sticky-header

### background (1 components)

- Lists / Tables / 02-simple-in-card

### badge (18 components)

- Data Display / Description Lists / 06-narrow-with-hidden-labels
- Elements / Badges / 01-with-border
- Elements / Badges / 02-with-border-and-dot
- Elements / Badges / 03-pill-with-border
- Elements / Badges / 04-pill-with-border-and-dot
- Elements / Badges / 05-with-border-and-remove-button
- Elements / Badges / 06-flat
- Elements / Badges / 07-flat-pill
- Elements / Badges / 08-flat-with-dot
- Elements / Badges / 09-flat-pill-with-dot
- Elements / Badges / 10-flat-with-remove-button
- Elements / Badges / 11-small-with-border
- Elements / Badges / 12-small-flat
- Elements / Badges / 13-small-pill-with-border
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 15-small-flat-with-dot
- Elements / Badges / 16-small-flat-pill-with-dot
- Headings / Section Headings / 10-with-badge-and-dropdown

### badges (11 components)

- Lists / Grid Lists / 07-logos-cards-with-description-list
- Lists / Stacked Lists / 05-with-badges-button-and-actions-menu
- Lists / Stacked Lists / 15-narrow-with-badges
- Lists / Tables / 09-with-avatars-and-multi-line-content
- Lists / Tables / 18-with-hidden-headings
- Lists / Tables / 19-full-width-with-avatars
- Navigation / Tabs / 08-tabs-underline-badges
- Navigation / Vertical Navigation / 02-with-badges
- Navigation / Vertical Navigation / 03-with-icons-and-badges
- Navigation / Vertical Navigation / 05-with-secondary-navigation
- Navigation / Vertical Navigation / 06-on-gray

### banner (1 components)

- Headings / Page Headings / 04-with-banner-image

### bar (2 components)

- Navigation / Progress Bars / 08-progress-bar
- Navigation / Tabs / 07-bar-underline

### billing (1 components)

- Forms / Input Groups / 15-inputs-with-shared-borders

### border (5 components)

- Feedback / Alerts / 05-with-accent-border
- Headings / Card Headings / 01-simple
- Headings / Section Headings / 01-simple
- Headings / Section Headings / 02-with-description
- Layout / List Containers / 06-flat-card-with-dividers

### border-top (1 components)

- Navigation / Pagination / 02-centered-page-numbers

### bordered (9 components)

- Elements / Badges / 01-with-border
- Elements / Badges / 02-with-border-and-dot
- Elements / Badges / 03-pill-with-border
- Elements / Badges / 04-pill-with-border-and-dot
- Elements / Badges / 05-with-border-and-remove-button
- Elements / Badges / 11-small-with-border
- Elements / Badges / 13-small-pill-with-border
- Lists / Tables / 16-with-border
- Navigation / Progress Bars / 04-panels-with-border

### borderless (2 components)

- Data Display / Calendars / 07-borderless-stacked
- Data Display / Calendars / 08-borderless-side-by-side

### borders (1 components)

- Lists / Grid Lists / 05-actions-with-shared-borders

### bottom-aligned (1 components)

- Layout / Media Objects / 03-aligned-to-bottom

### bottom-border (2 components)

- Forms / Input Groups / 20-input-with-gray-background-and-bottom-border
- Navigation / Navbars / 08-with-search

### brand (4 components)

- Application Shells / Sidebar Layouts / 07-simple-brand-sidebar
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Navigation / Sidebar Navigation / 05-brand
- Navigation / Tabs / 05-tabs-pills-brand

### branded (6 components)

- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Forms / Select Menus / 07-branded-with-supported-text
- Overlays / Drawers / 05-with-branded-header

### branded-header (1 components)

- Overlays / Drawers / 07-create-project-form-example

### breadcrumbs (6 components)

- Headings / Page Headings / 02-with-actions-and-breadcrumbs
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Navigation / Breadcrumbs / 01-contained
- Navigation / Breadcrumbs / 02-full-width-bar
- Navigation / Breadcrumbs / 03-simple-with-chevrons
- Navigation / Breadcrumbs / 04-simple-with-slashes

### breakpoint (2 components)

- Layout / Containers / 03-breakpoint-constrained-padded-above-mobile
- Layout / Containers / 04-breakpoint-constrained-with-padded-content

### bulk-actions (2 components)

- Elements / Button Groups / 05-with-checkbox-and-dropdown
- Lists / Tables / 17-with-checkboxes

### bullets (2 components)

- Navigation / Progress Bars / 03-bullets
- Navigation / Progress Bars / 06-bullets-and-text

### button (25 components)

- Elements / Buttons / 01-primary-buttons
- Elements / Buttons / 02-secondary-buttons
- Elements / Buttons / 03-soft-buttons
- Elements / Buttons / 04-buttons-with-leading-icon
- Elements / Buttons / 05-buttons-with-trailing-icon
- Elements / Buttons / 06-rounded-primary-buttons
- Elements / Buttons / 07-rounded-secondary-buttons
- Elements / Buttons / 08-circular-buttons
- Feedback / Alerts / 06-with-dismiss-button
- Forms / Action Panels / 01-simple
- Forms / Action Panels / 03-with-button-on-right
- Forms / Action Panels / 04-with-button-at-top-right
- Forms / Action Panels / 06-with-input
- Forms / Action Panels / 07-simple-well
- Forms / Action Panels / 08-with-well
- Forms / Input Groups / 14-input-with-leading-icon-and-trailing-button
- Headings / Card Headings / 02-with-action
- Headings / Card Headings / 04-with-description-and-action
- Headings / Page Headings / 08-with-filters-and-action
- Headings / Section Headings / 04-with-action
- Headings / Section Headings / 05-with-input-group
- Layout / Dividers / 06-with-button
- Layout / Dividers / 07-with-title-and-button
- Lists / Stacked Lists / 05-with-badges-button-and-actions-menu
- Lists / Stacked Lists / 12-narrow-with-actions

### button-group (6 components)

- Elements / Button Groups / 01-basic
- Elements / Button Groups / 02-icon-only
- Elements / Button Groups / 03-with-stat
- Elements / Button Groups / 04-with-dropdown
- Elements / Button Groups / 05-with-checkbox-and-dropdown
- Layout / Dividers / 08-with-toolbar

### buttons (11 components)

- Feedback / Alerts / 03-with-actions
- Headings / Card Headings / 03-with-avatar-and-actions
- Headings / Page Headings / 01-with-actions
- Headings / Page Headings / 02-with-actions-and-breadcrumbs
- Headings / Page Headings / 03-with-meta-and-actions
- Headings / Page Headings / 04-with-banner-image
- Headings / Page Headings / 05-with-avatar-and-actions
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Headings / Page Headings / 09-with-logo-meta-and-actions
- Headings / Section Headings / 03-with-actions
- Headings / Section Headings / 07-with-actions-and-tabs

### calendar (8 components)

- Data Display / Calendars / 01-small-with-meetings
- Data Display / Calendars / 02-month-view
- Data Display / Calendars / 03-week-view
- Data Display / Calendars / 04-day-view
- Data Display / Calendars / 05-year-view
- Data Display / Calendars / 06-double
- Data Display / Calendars / 07-borderless-stacked
- Data Display / Calendars / 08-borderless-side-by-side

### call-to-action (2 components)

- Forms / Action Panels / 01-simple
- Forms / Action Panels / 02-with-link

### card (40 components)

- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Data Display / Description Lists / 02-left-aligned-in-card
- Data Display / Description Lists / 06-narrow-with-hidden-labels
- Data Display / Stats / 03-simple-in-cards
- Data Display / Stats / 04-with-brand-icon
- Data Display / Stats / 05-with-shared-borders
- Forms / Action Panels / 01-simple
- Forms / Action Panels / 02-with-link
- Forms / Action Panels / 03-with-button-on-right
- Forms / Action Panels / 04-with-button-at-top-right
- Forms / Action Panels / 05-with-toggle
- Forms / Action Panels / 06-with-input
- Forms / Action Panels / 07-simple-well
- Forms / Action Panels / 08-with-well
- Forms / Sign-in and Registration / 04-simple-card
- Headings / Card Headings / 01-simple
- Headings / Card Headings / 02-with-action
- Headings / Card Headings / 03-with-avatar-and-actions
- Headings / Card Headings / 04-with-description-and-action
- Headings / Card Headings / 05-with-description
- Headings / Card Headings / 06-with-avatar-meta-and-dropdown
- Headings / Page Headings / 06-card-with-avatar-and-stats
- Layout / Cards / 01-basic-card
- Layout / Cards / 02-card-edge-to-edge-mobile
- Layout / Cards / 03-card-with-header
- Layout / Cards / 04-card-with-footer
- Layout / Cards / 05-card-with-header-and-footer
- Layout / Cards / 06-card-with-gray-footer
- Layout / Cards / 07-card-with-gray-body
- Layout / Cards / 08-well
- Layout / Cards / 09-well-on-gray
- Layout / Cards / 10-well-edge-to-edge-mobile
- Layout / List Containers / 02-card-with-dividers
- Layout / List Containers / 03-card-with-dividers-full-width-mobile
- Layout / List Containers / 04-separate-cards
- Layout / List Containers / 05-separate-cards-full-width-mobile
- Layout / List Containers / 06-flat-card-with-dividers
- Lists / Stacked Lists / 06-in-card-with-links
- Lists / Tables / 02-simple-in-card

### card-footer (2 components)

- Navigation / Pagination / 01-card-footer-with-page-buttons
- Navigation / Pagination / 03-simple-card-footer

### card-form (1 components)

- Forms / Input Groups / 15-inputs-with-shared-borders

### cards (10 components)

- Forms / Form Layouts / 03-two-column-with-cards
- Forms / Radio Groups / 10-cards
- Forms / Radio Groups / 11-small-cards
- Forms / Radio Groups / 12-stacked-cards
- Lists / Grid Lists / 01-contact-cards-with-small-portraits
- Lists / Grid Lists / 02-contact-cards
- Lists / Grid Lists / 03-simple-cards
- Lists / Grid Lists / 04-horizontal-link-cards
- Lists / Grid Lists / 05-actions-with-shared-borders
- Lists / Grid Lists / 07-logos-cards-with-description-list

### categories (1 components)

- Lists / Tables / 14-with-grouped-rows

### centered (10 components)

- Forms / Sign-in and Registration / 01-simple
- Layout / Dividers / 01-with-label
- Layout / Dividers / 02-with-icon
- Layout / Dividers / 04-with-title
- Layout / Dividers / 06-with-button
- Layout / Media Objects / 02-aligned-to-center
- Lists / Grid Lists / 02-contact-cards
- Navigation / Pagination / 02-centered-page-numbers
- Overlays / Modal Dialogs / 01-centered-with-single-action
- Overlays / Modal Dialogs / 02-centered-with-wide-buttons

### checkbox (13 components)

- Elements / Button Groups / 05-with-checkbox-and-dropdown
- Forms / Checkboxes / 01-list-with-description
- Forms / Checkboxes / 02-list-with-inline-description
- Forms / Checkboxes / 03-list-with-checkbox-on-right
- Forms / Checkboxes / 04-simple-list-with-heading
- Forms / Sign-in and Registration / 02-simple-no-labels
- Forms / Sign-in and Registration / 03-split-screen
- Forms / Sign-in and Registration / 04-simple-card
- Forms / Toggles / 01-simple-toggle
- Forms / Toggles / 02-short-toggle
- Forms / Toggles / 03-toggle-with-icon
- Forms / Toggles / 04-with-left-label-and-description
- Forms / Toggles / 05-with-right-label

### checkboxes (1 components)

- Lists / Tables / 17-with-checkboxes

### chevron (9 components)

- Elements / Dropdowns / 01-simple
- Lists / Stacked Lists / 02-with-links
- Lists / Stacked Lists / 06-in-card-with-links
- Lists / Stacked Lists / 07-two-columns-with-links
- Lists / Stacked Lists / 08-full-width-with-links
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Stacked Lists / 15-narrow-with-badges
- Lists / Tables / 13-with-sortable-headings
- Navigation / Breadcrumbs / 03-simple-with-chevrons

### circles (2 components)

- Navigation / Progress Bars / 05-circles
- Navigation / Progress Bars / 07-circles-with-text

### circular (9 components)

- Elements / Avatars / 01-circular-avatars
- Elements / Avatars / 03-circular-with-top-notification
- Elements / Avatars / 05-circular-with-bottom-notification
- Elements / Avatars / 07-circular-with-placeholder-icon
- Elements / Avatars / 08-circular-with-placeholder-initials
- Elements / Avatars / 09-avatar-group-stacked-bottom-to-top
- Elements / Avatars / 10-avatar-group-stacked-top-to-bottom
- Elements / Avatars / 11-with-text
- Elements / Buttons / 08-circular-buttons

### clickable (7 components)

- Feedback / Empty States / 02-with-dashed-border
- Lists / Stacked Lists / 02-with-links
- Lists / Stacked Lists / 06-in-card-with-links
- Lists / Stacked Lists / 07-two-columns-with-links
- Lists / Stacked Lists / 08-full-width-with-links
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Stacked Lists / 15-narrow-with-badges

### close-button (1 components)

- Overlays / Modal Dialogs / 04-simple-with-dismiss-button

### collapsible (2 components)

- Navigation / Sidebar Navigation / 03-with-expandable-sections
- Navigation / Sidebar Navigation / 04-with-secondary-navigation

### color-picker (1 components)

- Forms / Radio Groups / 09-color-picker

### color-variants (16 components)

- Elements / Badges / 01-with-border
- Elements / Badges / 02-with-border-and-dot
- Elements / Badges / 03-pill-with-border
- Elements / Badges / 04-pill-with-border-and-dot
- Elements / Badges / 05-with-border-and-remove-button
- Elements / Badges / 06-flat
- Elements / Badges / 07-flat-pill
- Elements / Badges / 08-flat-with-dot
- Elements / Badges / 09-flat-pill-with-dot
- Elements / Badges / 10-flat-with-remove-button
- Elements / Badges / 11-small-with-border
- Elements / Badges / 12-small-flat
- Elements / Badges / 13-small-pill-with-border
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 15-small-flat-with-dot
- Elements / Badges / 16-small-flat-pill-with-dot

### colored (1 components)

- Navigation / Sidebar Navigation / 05-brand

### combobox (4 components)

- Forms / Comboboxes / 01-simple
- Forms / Comboboxes / 02-with-status-indicator
- Forms / Comboboxes / 03-with-image
- Forms / Comboboxes / 04-with-secondary-text

### comment (3 components)

- Forms / Textareas / 01-simple
- Forms / Textareas / 02-with-avatar-and-actions
- Forms / Textareas / 03-with-underline-and-actions

### comments (4 components)

- Lists / Feeds / 02-with-comments
- Lists / Feeds / 03-with-multiple-item-types
- Lists / Stacked Lists / 03-with-inline-links-and-avatar-group
- Lists / Stacked Lists / 13-narrow-with-truncated-content

### commits (1 components)

- Lists / Stacked Lists / 14-narrow-with-small-avatars

### compact (15 components)

- Data Display / Description Lists / 06-narrow-with-hidden-labels
- Elements / Badges / 11-small-with-border
- Elements / Badges / 12-small-flat
- Elements / Badges / 13-small-pill-with-border
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 15-small-flat-with-dot
- Elements / Badges / 16-small-flat-pill-with-dot
- Forms / Radio Groups / 11-small-cards
- Forms / Toggles / 02-short-toggle
- Lists / Stacked Lists / 10-narrow
- Lists / Stacked Lists / 14-narrow-with-small-avatars
- Lists / Tables / 12-with-condensed-content
- Navigation / Progress Bars / 03-bullets
- Navigation / Progress Bars / 05-circles
- Overlays / Notifications / 02-condensed

### compact-header (2 components)

- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header

### condensed (1 components)

- Lists / Tables / 12-with-condensed-content

### connected (2 components)

- Navigation / Progress Bars / 05-circles
- Navigation / Progress Bars / 07-circles-with-text

### constrained (6 components)

- Application Shells / Multi-Column Layouts / 03-constrained-three-column
- Application Shells / Multi-Column Layouts / 04-constrained-with-sticky-columns
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Tables / 04-full-width-with-constrained-content
- Lists / Tables / 18-with-hidden-headings

### contacts (2 components)

- Lists / Grid Lists / 01-contact-cards-with-small-portraits
- Lists / Grid Lists / 02-contact-cards

### contained (1 components)

- Navigation / Breadcrumbs / 01-contained

### container (6 components)

- Layout / Cards / 01-basic-card
- Layout / Containers / 01-full-width-mobile-constrained-padded
- Layout / Containers / 02-constrained-with-padded-content
- Layout / Containers / 03-breakpoint-constrained-padded-above-mobile
- Layout / Containers / 04-breakpoint-constrained-with-padded-content
- Layout / Containers / 05-narrow-constrained-with-padded-content

### contrast (1 components)

- Layout / Cards / 09-well-on-gray

### count (2 components)

- Navigation / Vertical Navigation / 02-with-badges
- Navigation / Vertical Navigation / 03-with-icons-and-badges

### counter (1 components)

- Elements / Button Groups / 03-with-stat

### counts (1 components)

- Navigation / Tabs / 08-tabs-underline-badges

### cta (3 components)

- Lists / Stacked Lists / 12-narrow-with-actions
- Navigation / Navbars / 02-dark-quick-action
- Navigation / Navbars / 06-with-quick-action

### cta-button (2 components)

- Feedback / Empty States / 01-simple
- Navigation / Navbars / 11-with-search-in-column-layout

### currency (2 components)

- Forms / Input Groups / 11-input-with-inline-leading-and-trailing-add-ons
- Forms / Input Groups / 13-input-with-inline-leading-add-on-and-trailing-dropdown

### custom (6 components)

- Forms / Select Menus / 02-simple-custom
- Forms / Select Menus / 03-custom-with-check-on-left
- Forms / Select Menus / 04-custom-with-status-indicator
- Forms / Select Menus / 05-custom-with-avatar
- Forms / Select Menus / 06-with-secondary-text
- Forms / Select Menus / 07-branded-with-supported-text

### custom-checkbox (4 components)

- Forms / Checkboxes / 01-list-with-description
- Forms / Checkboxes / 02-list-with-inline-description
- Forms / Checkboxes / 03-list-with-checkbox-on-right
- Forms / Checkboxes / 04-simple-list-with-heading

### dark (74 components)

- Application Shells / Multi-Column Layouts / 01-full-width-three-column
- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right
- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Application Shells / Sidebar Layouts / 01-simple-sidebar
- Application Shells / Sidebar Layouts / 02-simple-dark-sidebar
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 06-with-off-white-background
- Application Shells / Stacked Layouts / 01-with-bottom-border
- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Data Display / Calendars / 01-small-with-meetings
- Data Display / Calendars / 02-month-view
- Data Display / Calendars / 03-week-view
- Data Display / Calendars / 04-day-view
- Data Display / Calendars / 05-year-view
- Data Display / Calendars / 06-double
- Data Display / Calendars / 07-borderless-stacked
- Data Display / Calendars / 08-borderless-side-by-side
- Data Display / Description Lists / 01-left-aligned
- Data Display / Description Lists / 02-left-aligned-in-card
- Data Display / Description Lists / 03-left-aligned-striped
- Data Display / Description Lists / 04-two-column
- Data Display / Description Lists / 05-left-aligned-with-inline-actions
- Data Display / Description Lists / 06-narrow-with-hidden-labels
- Data Display / Stats / 01-with-trending
- Data Display / Stats / 02-simple
- Data Display / Stats / 03-simple-in-cards
- Data Display / Stats / 04-with-brand-icon
- Data Display / Stats / 05-with-shared-borders
- Navigation / Breadcrumbs / 01-contained
- Navigation / Breadcrumbs / 02-full-width-bar
- Navigation / Breadcrumbs / 03-simple-with-chevrons
- Navigation / Breadcrumbs / 04-simple-with-slashes
- Navigation / Navbars / 01-simple-dark-menu-left
- Navigation / Navbars / 02-dark-quick-action
- Navigation / Navbars / 03-simple-dark
- Navigation / Navbars / 04-simple-menu-left
- Navigation / Navbars / 05-simple
- Navigation / Navbars / 06-with-quick-action
- Navigation / Navbars / 07-dark-with-search
- Navigation / Navbars / 08-with-search
- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links
- Navigation / Navbars / 11-with-search-in-column-layout
- Navigation / Pagination / 01-card-footer-with-page-buttons
- Navigation / Pagination / 02-centered-page-numbers
- Navigation / Pagination / 03-simple-card-footer
- Navigation / Progress Bars / 01-simple
- Navigation / Progress Bars / 02-panels
- Navigation / Progress Bars / 03-bullets
- Navigation / Progress Bars / 04-panels-with-border
- Navigation / Progress Bars / 05-circles
- Navigation / Progress Bars / 06-bullets-and-text
- Navigation / Progress Bars / 07-circles-with-text
- Navigation / Progress Bars / 08-progress-bar
- Navigation / Sidebar Navigation / 01-light
- Navigation / Sidebar Navigation / 02-dark
- Navigation / Sidebar Navigation / 03-with-expandable-sections
- Navigation / Sidebar Navigation / 04-with-secondary-navigation
- Navigation / Vertical Navigation / 01-simple
- Navigation / Vertical Navigation / 02-with-badges
- Navigation / Vertical Navigation / 03-with-icons-and-badges
- Navigation / Vertical Navigation / 04-with-icons
- Navigation / Vertical Navigation / 05-with-secondary-navigation
- Navigation / Vertical Navigation / 06-on-gray

### dashboard (1 components)

- Headings / Page Headings / 06-card-with-avatar-and-stats

### dashed-border (1 components)

- Feedback / Empty States / 02-with-dashed-border

### data-display (19 components)

- Data Display / Calendars / 01-small-with-meetings
- Data Display / Calendars / 02-month-view
- Data Display / Calendars / 03-week-view
- Data Display / Calendars / 04-day-view
- Data Display / Calendars / 05-year-view
- Data Display / Calendars / 06-double
- Data Display / Calendars / 07-borderless-stacked
- Data Display / Calendars / 08-borderless-side-by-side
- Data Display / Description Lists / 01-left-aligned
- Data Display / Description Lists / 02-left-aligned-in-card
- Data Display / Description Lists / 03-left-aligned-striped
- Data Display / Description Lists / 04-two-column
- Data Display / Description Lists / 05-left-aligned-with-inline-actions
- Data Display / Description Lists / 06-narrow-with-hidden-labels
- Data Display / Stats / 01-with-trending
- Data Display / Stats / 02-simple
- Data Display / Stats / 03-simple-in-cards
- Data Display / Stats / 04-with-brand-icon
- Data Display / Stats / 05-with-shared-borders

### data-table (19 components)

- Lists / Tables / 01-simple
- Lists / Tables / 02-simple-in-card
- Lists / Tables / 03-full-width
- Lists / Tables / 04-full-width-with-constrained-content
- Lists / Tables / 05-with-striped-rows
- Lists / Tables / 06-with-uppercase-headings
- Lists / Tables / 07-with-stacked-columns-on-mobile
- Lists / Tables / 08-with-hidden-columns-on-mobile
- Lists / Tables / 09-with-avatars-and-multi-line-content
- Lists / Tables / 10-with-sticky-header
- Lists / Tables / 11-with-vertical-lines
- Lists / Tables / 12-with-condensed-content
- Lists / Tables / 13-with-sortable-headings
- Lists / Tables / 14-with-grouped-rows
- Lists / Tables / 15-with-summary-rows
- Lists / Tables / 16-with-border
- Lists / Tables / 17-with-checkboxes
- Lists / Tables / 18-with-hidden-headings
- Lists / Tables / 19-full-width-with-avatars

### day-view (1 components)

- Data Display / Calendars / 04-day-view

### dense (1 components)

- Lists / Tables / 12-with-condensed-content

### deployment (1 components)

- Lists / Tables / 19-full-width-with-avatars

### deployments (1 components)

- Lists / Stacked Lists / 15-narrow-with-badges

### description (10 components)

- Forms / Checkboxes / 01-list-with-description
- Forms / Checkboxes / 03-list-with-checkbox-on-right
- Forms / Radio Groups / 03-list-with-description
- Forms / Radio Groups / 05-list-with-radio-on-right
- Forms / Radio Groups / 08-list-with-descriptions-in-panel
- Forms / Select Menus / 07-branded-with-supported-text
- Forms / Toggles / 04-with-left-label-and-description
- Headings / Card Headings / 04-with-description-and-action
- Headings / Card Headings / 05-with-description
- Headings / Section Headings / 02-with-description

### description-list (7 components)

- Data Display / Description Lists / 01-left-aligned
- Data Display / Description Lists / 02-left-aligned-in-card
- Data Display / Description Lists / 03-left-aligned-striped
- Data Display / Description Lists / 04-two-column
- Data Display / Description Lists / 05-left-aligned-with-inline-actions
- Data Display / Description Lists / 06-narrow-with-hidden-labels
- Lists / Tables / 07-with-stacked-columns-on-mobile

### descriptions (2 components)

- Navigation / Progress Bars / 04-panels-with-border
- Navigation / Progress Bars / 07-circles-with-text

### destructive (3 components)

- Overlays / Modal Dialogs / 03-simple-alert
- Overlays / Modal Dialogs / 05-simple-with-gray-footer
- Overlays / Modal Dialogs / 06-simple-alert-with-left-aligned-buttons

### dialog (7 components)

- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Overlays / Modal Dialogs / 01-centered-with-single-action
- Overlays / Modal Dialogs / 02-centered-with-wide-buttons
- Overlays / Modal Dialogs / 03-simple-alert
- Overlays / Modal Dialogs / 04-simple-with-dismiss-button
- Overlays / Modal Dialogs / 05-simple-with-gray-footer
- Overlays / Modal Dialogs / 06-simple-alert-with-left-aligned-buttons

### directory (1 components)

- Lists / Stacked Lists / 11-narrow-with-sticky-headings

### disabled (1 components)

- Forms / Input Groups / 04-input-with-disabled-state

### disabled-state (1 components)

- Forms / Radio Groups / 11-small-cards

### disclosure (2 components)

- Navigation / Sidebar Navigation / 03-with-expandable-sections
- Navigation / Sidebar Navigation / 04-with-secondary-navigation

### discussions (1 components)

- Lists / Stacked Lists / 03-with-inline-links-and-avatar-group

### dismissible (8 components)

- Elements / Badges / 05-with-border-and-remove-button
- Elements / Badges / 10-flat-with-remove-button
- Feedback / Alerts / 06-with-dismiss-button
- Overlays / Modal Dialogs / 04-simple-with-dismiss-button
- Overlays / Notifications / 01-simple
- Overlays / Notifications / 02-condensed
- Overlays / Notifications / 03-with-actions-below
- Overlays / Notifications / 06-with-buttons-below

### divided (4 components)

- Forms / Form Layouts / 04-labels-on-left
- Layout / Cards / 03-card-with-header
- Layout / Cards / 04-card-with-footer
- Layout / Cards / 05-card-with-header-and-footer

### divider (8 components)

- Layout / Dividers / 01-with-label
- Layout / Dividers / 02-with-icon
- Layout / Dividers / 03-with-label-on-left
- Layout / Dividers / 04-with-title
- Layout / Dividers / 05-with-title-on-left
- Layout / Dividers / 06-with-button
- Layout / Dividers / 07-with-title-and-button
- Layout / Dividers / 08-with-toolbar

### dividers (12 components)

- Elements / Dropdowns / 02-with-dividers
- Elements / Dropdowns / 03-with-icons
- Elements / Dropdowns / 05-with-simple-header
- Forms / Checkboxes / 03-list-with-checkbox-on-right
- Forms / Checkboxes / 04-simple-list-with-heading
- Forms / Radio Groups / 05-list-with-radio-on-right
- Forms / Radio Groups / 06-simple-list-with-radio-on-right
- Layout / List Containers / 01-simple-with-dividers
- Layout / List Containers / 02-card-with-dividers
- Layout / List Containers / 03-card-with-dividers-full-width-mobile
- Layout / List Containers / 06-flat-card-with-dividers
- Layout / List Containers / 07-simple-with-dividers-full-width-mobile

### double-month (1 components)

- Data Display / Calendars / 06-double

### drawer (9 components)

- Overlays / Drawers / 01-empty
- Overlays / Drawers / 02-wide-empty
- Overlays / Drawers / 03-with-background-overlay
- Overlays / Drawers / 04-with-close-button-on-outside
- Overlays / Drawers / 05-with-branded-header
- Overlays / Drawers / 06-with-sticky-footer
- Overlays / Drawers / 07-create-project-form-example
- Overlays / Drawers / 08-wide-create-project-form-example
- Overlays / Drawers / 09-user-profile-example

### dropdown (27 components)

- Elements / Button Groups / 04-with-dropdown
- Elements / Button Groups / 05-with-checkbox-and-dropdown
- Elements / Dropdowns / 01-simple
- Elements / Dropdowns / 02-with-dividers
- Elements / Dropdowns / 03-with-icons
- Elements / Dropdowns / 04-with-minimal-menu-icon
- Elements / Dropdowns / 05-with-simple-header
- Forms / Comboboxes / 01-simple
- Forms / Comboboxes / 02-with-status-indicator
- Forms / Comboboxes / 03-with-image
- Forms / Comboboxes / 04-with-secondary-text
- Forms / Input Groups / 12-input-with-inline-leading-dropdown
- Forms / Input Groups / 13-input-with-inline-leading-add-on-and-trailing-dropdown
- Forms / Select Menus / 01-simple-native
- Forms / Select Menus / 02-simple-custom
- Forms / Select Menus / 03-custom-with-check-on-left
- Forms / Select Menus / 04-custom-with-status-indicator
- Forms / Select Menus / 05-custom-with-avatar
- Forms / Select Menus / 06-with-secondary-text
- Forms / Select Menus / 07-branded-with-supported-text
- Headings / Card Headings / 06-with-avatar-meta-and-dropdown
- Headings / Page Headings / 03-with-meta-and-actions
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Headings / Page Headings / 09-with-logo-meta-and-actions
- Headings / Section Headings / 06-with-tabs
- Headings / Section Headings / 07-with-actions-and-tabs
- Headings / Section Headings / 10-with-badge-and-dropdown

### dropdown-menu (9 components)

- Data Display / Calendars / 01-small-with-meetings
- Data Display / Calendars / 02-month-view
- Data Display / Calendars / 03-week-view
- Data Display / Calendars / 04-day-view
- Data Display / Calendars / 05-year-view
- Data Display / Calendars / 07-borderless-stacked
- Data Display / Calendars / 08-borderless-side-by-side
- Lists / Stacked Lists / 04-with-inline-links-and-actions-menu
- Lists / Stacked Lists / 05-with-badges-button-and-actions-menu

### due-date (1 components)

- Forms / Textareas / 04-with-title-and-pill-actions

### edge-to-edge (4 components)

- Layout / Cards / 02-card-edge-to-edge-mobile
- Layout / Cards / 10-well-edge-to-edge-mobile
- Layout / List Containers / 03-card-with-dividers-full-width-mobile
- Layout / List Containers / 05-separate-cards-full-width-mobile

### editable (1 components)

- Data Display / Description Lists / 05-left-aligned-with-inline-actions

### ellipsis (1 components)

- Elements / Dropdowns / 04-with-minimal-menu-icon

### email (7 components)

- Forms / Input Groups / 01-input-with-label
- Forms / Input Groups / 02-input-with-label-and-help-text
- Forms / Input Groups / 03-input-with-validation-error
- Forms / Input Groups / 04-input-with-disabled-state
- Forms / Input Groups / 05-input-with-hidden-label
- Forms / Input Groups / 06-input-with-corner-hint
- Forms / Input Groups / 07-input-with-leading-icon

### empty-state (6 components)

- Feedback / Empty States / 01-simple
- Feedback / Empty States / 02-with-dashed-border
- Feedback / Empty States / 03-with-starting-points
- Feedback / Empty States / 04-with-recommendations
- Feedback / Empty States / 05-with-templates
- Feedback / Empty States / 06-with-recommendations-grid

### environment (1 components)

- Lists / Stacked Lists / 15-narrow-with-badges

### error (2 components)

- Feedback / Alerts / 02-with-list
- Forms / Input Groups / 03-input-with-validation-error

### events (3 components)

- Data Display / Calendars / 02-month-view
- Data Display / Calendars / 03-week-view
- Data Display / Calendars / 04-day-view

### events-list (1 components)

- Data Display / Calendars / 06-double

### expandable (2 components)

- Navigation / Sidebar Navigation / 03-with-expandable-sections
- Navigation / Sidebar Navigation / 04-with-secondary-navigation

### external-close (1 components)

- Overlays / Drawers / 04-with-close-button-on-outside

### fab (1 components)

- Elements / Buttons / 08-circular-buttons

### fallback (2 components)

- Elements / Avatars / 07-circular-with-placeholder-icon
- Elements / Avatars / 08-circular-with-placeholder-initials

### feed (3 components)

- Lists / Feeds / 01-simple-with-icons
- Lists / Feeds / 02-with-comments
- Lists / Feeds / 03-with-multiple-item-types

### feedback (12 components)

- Feedback / Alerts / 01-with-description
- Feedback / Alerts / 02-with-list
- Feedback / Alerts / 03-with-actions
- Feedback / Alerts / 04-with-link-on-right
- Feedback / Alerts / 05-with-accent-border
- Feedback / Alerts / 06-with-dismiss-button
- Feedback / Empty States / 01-simple
- Feedback / Empty States / 02-with-dashed-border
- Feedback / Empty States / 03-with-starting-points
- Feedback / Empty States / 04-with-recommendations
- Feedback / Empty States / 05-with-templates
- Feedback / Empty States / 06-with-recommendations-grid

### fieldset (17 components)

- Forms / Checkboxes / 01-list-with-description
- Forms / Checkboxes / 02-list-with-inline-description
- Forms / Checkboxes / 03-list-with-checkbox-on-right
- Forms / Checkboxes / 04-simple-list-with-heading
- Forms / Input Groups / 15-inputs-with-shared-borders
- Forms / Radio Groups / 01-simple-list
- Forms / Radio Groups / 02-simple-inline-list
- Forms / Radio Groups / 03-list-with-description
- Forms / Radio Groups / 04-list-with-inline-description
- Forms / Radio Groups / 05-list-with-radio-on-right
- Forms / Radio Groups / 06-simple-list-with-radio-on-right
- Forms / Radio Groups / 07-simple-table
- Forms / Radio Groups / 08-list-with-descriptions-in-panel
- Forms / Radio Groups / 09-color-picker
- Forms / Radio Groups / 10-cards
- Forms / Radio Groups / 11-small-cards
- Forms / Radio Groups / 12-stacked-cards

### filters (1 components)

- Headings / Page Headings / 08-with-filters-and-action

### financial (2 components)

- Lists / Tables / 12-with-condensed-content
- Lists / Tables / 15-with-summary-rows

### fixed-header (1 components)

- Lists / Tables / 10-with-sticky-header

### flat (10 components)

- Elements / Badges / 06-flat
- Elements / Badges / 07-flat-pill
- Elements / Badges / 08-flat-with-dot
- Elements / Badges / 09-flat-pill-with-dot
- Elements / Badges / 10-flat-with-remove-button
- Elements / Badges / 12-small-flat
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 15-small-flat-with-dot
- Elements / Badges / 16-small-flat-pill-with-dot
- Layout / List Containers / 06-flat-card-with-dividers

### flex (5 components)

- Layout / Media Objects / 01-basic
- Layout / Media Objects / 02-aligned-to-center
- Layout / Media Objects / 03-aligned-to-bottom
- Layout / Media Objects / 04-stretched-to-fit
- Layout / Media Objects / 05-media-on-right

### floating (2 components)

- Forms / Input Groups / 16-input-with-inset-label
- Forms / Input Groups / 18-input-with-overlapping-label

### footer (6 components)

- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Layout / Cards / 04-card-with-footer
- Layout / Cards / 05-card-with-header-and-footer
- Layout / Cards / 06-card-with-gray-footer
- Lists / Tables / 15-with-summary-rows
- Overlays / Modal Dialogs / 05-simple-with-gray-footer

### form (14 components)

- Feedback / Empty States / 04-with-recommendations
- Feedback / Empty States / 06-with-recommendations-grid
- Forms / Action Panels / 06-with-input
- Forms / Form Layouts / 01-stacked
- Forms / Form Layouts / 02-two-column
- Forms / Form Layouts / 03-two-column-with-cards
- Forms / Form Layouts / 04-labels-on-left
- Forms / Sign-in and Registration / 01-simple
- Forms / Sign-in and Registration / 02-simple-no-labels
- Forms / Sign-in and Registration / 03-split-screen
- Forms / Sign-in and Registration / 04-simple-card
- Lists / Feeds / 02-with-comments
- Overlays / Drawers / 07-create-project-form-example
- Overlays / Drawers / 08-wide-create-project-form-example

### form-control (25 components)

- Forms / Checkboxes / 01-list-with-description
- Forms / Checkboxes / 02-list-with-inline-description
- Forms / Checkboxes / 03-list-with-checkbox-on-right
- Forms / Checkboxes / 04-simple-list-with-heading
- Forms / Comboboxes / 01-simple
- Forms / Comboboxes / 02-with-status-indicator
- Forms / Comboboxes / 03-with-image
- Forms / Comboboxes / 04-with-secondary-text
- Forms / Radio Groups / 01-simple-list
- Forms / Radio Groups / 02-simple-inline-list
- Forms / Radio Groups / 03-list-with-description
- Forms / Radio Groups / 04-list-with-inline-description
- Forms / Radio Groups / 05-list-with-radio-on-right
- Forms / Radio Groups / 06-simple-list-with-radio-on-right
- Forms / Radio Groups / 07-simple-table
- Forms / Radio Groups / 08-list-with-descriptions-in-panel
- Forms / Radio Groups / 09-color-picker
- Forms / Radio Groups / 10-cards
- Forms / Radio Groups / 11-small-cards
- Forms / Radio Groups / 12-stacked-cards
- Forms / Toggles / 01-simple-toggle
- Forms / Toggles / 02-short-toggle
- Forms / Toggles / 03-toggle-with-icon
- Forms / Toggles / 04-with-left-label-and-description
- Forms / Toggles / 05-with-right-label

### form-field (31 components)

- Forms / Input Groups / 01-input-with-label
- Forms / Input Groups / 02-input-with-label-and-help-text
- Forms / Input Groups / 03-input-with-validation-error
- Forms / Input Groups / 04-input-with-disabled-state
- Forms / Input Groups / 05-input-with-hidden-label
- Forms / Input Groups / 06-input-with-corner-hint
- Forms / Input Groups / 07-input-with-leading-icon
- Forms / Input Groups / 08-input-with-trailing-icon
- Forms / Input Groups / 09-input-with-add-on
- Forms / Input Groups / 10-input-with-inline-add-on
- Forms / Input Groups / 11-input-with-inline-leading-and-trailing-add-ons
- Forms / Input Groups / 12-input-with-inline-leading-dropdown
- Forms / Input Groups / 13-input-with-inline-leading-add-on-and-trailing-dropdown
- Forms / Input Groups / 14-input-with-leading-icon-and-trailing-button
- Forms / Input Groups / 16-input-with-inset-label
- Forms / Input Groups / 17-inputs-with-inset-labels-and-shared-borders
- Forms / Input Groups / 18-input-with-overlapping-label
- Forms / Input Groups / 19-input-with-pill-shape
- Forms / Input Groups / 20-input-with-gray-background-and-bottom-border
- Forms / Input Groups / 21-input-with-keyboard-shortcut
- Forms / Select Menus / 01-simple-native
- Forms / Select Menus / 02-simple-custom
- Forms / Select Menus / 03-custom-with-check-on-left
- Forms / Select Menus / 04-custom-with-status-indicator
- Forms / Select Menus / 05-custom-with-avatar
- Forms / Select Menus / 06-with-secondary-text
- Forms / Textareas / 01-simple
- Forms / Textareas / 02-with-avatar-and-actions
- Forms / Textareas / 03-with-underline-and-actions
- Forms / Textareas / 04-with-title-and-pill-actions
- Forms / Textareas / 05-with-preview-button

### full-height (4 components)

- Layout / Media Objects / 04-stretched-to-fit
- Navigation / Sidebar Navigation / 01-light
- Navigation / Sidebar Navigation / 02-dark
- Navigation / Sidebar Navigation / 05-brand

### full-width (8 components)

- Layout / Media Objects / 07-wide-responsive
- Lists / Stacked Lists / 08-full-width-with-links
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Tables / 03-full-width
- Lists / Tables / 04-full-width-with-constrained-content
- Lists / Tables / 19-full-width-with-avatars
- Navigation / Breadcrumbs / 02-full-width-bar
- Navigation / Tabs / 06-full-width-underline

### gallery (1 components)

- Lists / Grid Lists / 06-images-with-details

### git (1 components)

- Lists / Stacked Lists / 14-narrow-with-small-avatars

### gray-background (7 components)

- Forms / Input Groups / 20-input-with-gray-background-and-bottom-border
- Layout / Cards / 06-card-with-gray-footer
- Layout / Cards / 07-card-with-gray-body
- Layout / Cards / 08-well
- Layout / Cards / 09-well-on-gray
- Layout / Cards / 10-well-edge-to-edge-mobile
- Navigation / Vertical Navigation / 06-on-gray

### grid (14 components)

- Feedback / Empty States / 03-with-starting-points
- Feedback / Empty States / 06-with-recommendations-grid
- Forms / Radio Groups / 07-simple-table
- Forms / Radio Groups / 10-cards
- Forms / Radio Groups / 11-small-cards
- Headings / Page Headings / 06-card-with-avatar-and-stats
- Lists / Grid Lists / 01-contact-cards-with-small-portraits
- Lists / Grid Lists / 02-contact-cards
- Lists / Grid Lists / 03-simple-cards
- Lists / Grid Lists / 04-horizontal-link-cards
- Lists / Grid Lists / 05-actions-with-shared-borders
- Lists / Grid Lists / 06-images-with-details
- Lists / Grid Lists / 07-logos-cards-with-description-list
- Lists / Tables / 11-with-vertical-lines

### grid-layout (16 components)

- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Data Display / Calendars / 01-small-with-meetings
- Data Display / Calendars / 02-month-view
- Data Display / Calendars / 03-week-view
- Data Display / Calendars / 04-day-view
- Data Display / Calendars / 05-year-view
- Data Display / Calendars / 06-double
- Data Display / Description Lists / 04-two-column
- Data Display / Stats / 01-with-trending
- Data Display / Stats / 02-simple
- Data Display / Stats / 03-simple-in-cards
- Data Display / Stats / 04-with-brand-icon
- Data Display / Stats / 05-with-shared-borders
- Navigation / Navbars / 11-with-search-in-column-layout
- Overlays / Drawers / 08-wide-create-project-form-example
- Overlays / Modal Dialogs / 02-centered-with-wide-buttons

### grouped (12 components)

- Elements / Dropdowns / 02-with-dividers
- Elements / Dropdowns / 03-with-icons
- Forms / Input Groups / 15-inputs-with-shared-borders
- Forms / Input Groups / 17-inputs-with-inset-labels-and-shared-borders
- Lists / Stacked Lists / 11-narrow-with-sticky-headings
- Lists / Tables / 14-with-grouped-rows
- Lists / Tables / 18-with-hidden-headings
- Navigation / Sidebar Navigation / 01-light
- Navigation / Sidebar Navigation / 02-dark
- Navigation / Sidebar Navigation / 05-brand
- Navigation / Vertical Navigation / 05-with-secondary-navigation
- Navigation / Vertical Navigation / 06-on-gray

### has-checked (3 components)

- Forms / Radio Groups / 08-list-with-descriptions-in-panel
- Forms / Radio Groups / 10-cards
- Forms / Radio Groups / 12-stacked-cards

### header (12 components)

- Application Shells / Multi-Column Layouts / 03-constrained-three-column
- Application Shells / Multi-Column Layouts / 04-constrained-with-sticky-columns
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Elements / Dropdowns / 05-with-simple-header
- Layout / Cards / 03-card-with-header
- Layout / Cards / 05-card-with-header-and-footer
- Layout / Cards / 07-card-with-gray-body
- Overlays / Drawers / 05-with-branded-header

### headers (1 components)

- Lists / Tables / 06-with-uppercase-headings

### heading (27 components)

- Headings / Card Headings / 01-simple
- Headings / Card Headings / 02-with-action
- Headings / Card Headings / 03-with-avatar-and-actions
- Headings / Card Headings / 04-with-description-and-action
- Headings / Card Headings / 05-with-description
- Headings / Card Headings / 06-with-avatar-meta-and-dropdown
- Headings / Page Headings / 01-with-actions
- Headings / Page Headings / 02-with-actions-and-breadcrumbs
- Headings / Page Headings / 03-with-meta-and-actions
- Headings / Page Headings / 04-with-banner-image
- Headings / Page Headings / 05-with-avatar-and-actions
- Headings / Page Headings / 06-card-with-avatar-and-stats
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Headings / Page Headings / 08-with-filters-and-action
- Headings / Page Headings / 09-with-logo-meta-and-actions
- Headings / Section Headings / 01-simple
- Headings / Section Headings / 02-with-description
- Headings / Section Headings / 03-with-actions
- Headings / Section Headings / 04-with-action
- Headings / Section Headings / 05-with-input-group
- Headings / Section Headings / 06-with-tabs
- Headings / Section Headings / 07-with-actions-and-tabs
- Headings / Section Headings / 08-with-inline-tabs
- Headings / Section Headings / 09-with-label
- Headings / Section Headings / 10-with-badge-and-dropdown
- Layout / Dividers / 04-with-title
- Layout / Dividers / 05-with-title-on-left

### headlessui (4 components)

- Forms / Comboboxes / 01-simple
- Forms / Comboboxes / 02-with-status-indicator
- Forms / Comboboxes / 03-with-image
- Forms / Comboboxes / 04-with-secondary-text

### help (1 components)

- Forms / Input Groups / 08-input-with-trailing-icon

### help-text (1 components)

- Forms / Input Groups / 02-input-with-label-and-help-text

### hidden (1 components)

- Lists / Tables / 08-with-hidden-columns-on-mobile

### hidden-headers (1 components)

- Lists / Tables / 18-with-hidden-headings

### hierarchical (1 components)

- Layout / Media Objects / 08-nested

### hint (1 components)

- Forms / Input Groups / 06-input-with-corner-hint

### home-icon (4 components)

- Navigation / Breadcrumbs / 01-contained
- Navigation / Breadcrumbs / 02-full-width-bar
- Navigation / Breadcrumbs / 03-simple-with-chevrons
- Navigation / Breadcrumbs / 04-simple-with-slashes

### horizontal (2 components)

- Forms / Form Layouts / 04-labels-on-left
- Navigation / Progress Bars / 08-progress-bar

### horizontal-layout (2 components)

- Forms / Action Panels / 03-with-button-on-right
- Forms / Action Panels / 04-with-button-at-top-right

### hover (6 components)

- Elements / Avatars / 11-with-text
- Lists / Grid Lists / 04-horizontal-link-cards
- Lists / Grid Lists / 06-images-with-details
- Lists / Stacked Lists / 06-in-card-with-links
- Lists / Stacked Lists / 08-full-width-with-links
- Lists / Stacked Lists / 09-full-width-with-constrained-content

### icon (11 components)

- Elements / Avatars / 07-circular-with-placeholder-icon
- Elements / Button Groups / 03-with-stat
- Elements / Buttons / 04-buttons-with-leading-icon
- Elements / Buttons / 05-buttons-with-trailing-icon
- Feedback / Empty States / 01-simple
- Forms / Input Groups / 03-input-with-validation-error
- Forms / Input Groups / 07-input-with-leading-icon
- Forms / Input Groups / 08-input-with-trailing-icon
- Forms / Input Groups / 14-input-with-leading-icon-and-trailing-button
- Forms / Toggles / 03-toggle-with-icon
- Layout / Dividers / 02-with-icon

### icon-button (1 components)

- Elements / Dropdowns / 04-with-minimal-menu-icon

### icon-indicator (1 components)

- Forms / Radio Groups / 10-cards

### icon-only (4 components)

- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Elements / Button Groups / 02-icon-only
- Elements / Buttons / 08-circular-buttons

### icons (23 components)

- Data Display / Description Lists / 06-narrow-with-hidden-labels
- Data Display / Stats / 04-with-brand-icon
- Elements / Dropdowns / 03-with-icons
- Feedback / Empty States / 05-with-templates
- Headings / Card Headings / 03-with-avatar-and-actions
- Headings / Card Headings / 06-with-avatar-meta-and-dropdown
- Headings / Page Headings / 03-with-meta-and-actions
- Headings / Page Headings / 04-with-banner-image
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Headings / Page Headings / 08-with-filters-and-action
- Headings / Page Headings / 09-with-logo-meta-and-actions
- Headings / Section Headings / 05-with-input-group
- Headings / Section Headings / 06-with-tabs
- Headings / Section Headings / 07-with-actions-and-tabs
- Headings / Section Headings / 10-with-badge-and-dropdown
- Lists / Feeds / 01-simple-with-icons
- Lists / Grid Lists / 05-actions-with-shared-borders
- Navigation / Sidebar Navigation / 04-with-secondary-navigation
- Navigation / Tabs / 02-tabs-underline-icons
- Navigation / Vertical Navigation / 03-with-icons-and-badges
- Navigation / Vertical Navigation / 04-with-icons
- Navigation / Vertical Navigation / 05-with-secondary-navigation
- Navigation / Vertical Navigation / 06-on-gray

### image (1 components)

- Forms / Comboboxes / 03-with-image

### image-text (8 components)

- Layout / Media Objects / 01-basic
- Layout / Media Objects / 02-aligned-to-center
- Layout / Media Objects / 03-aligned-to-bottom
- Layout / Media Objects / 04-stretched-to-fit
- Layout / Media Objects / 05-media-on-right
- Layout / Media Objects / 06-basic-responsive
- Layout / Media Objects / 07-wide-responsive
- Layout / Media Objects / 08-nested

### images (1 components)

- Lists / Grid Lists / 06-images-with-details

### indeterminate (1 components)

- Lists / Tables / 17-with-checkboxes

### indigo (7 components)

- Application Shells / Sidebar Layouts / 07-simple-brand-sidebar
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Navigation / Sidebar Navigation / 05-brand

### info (1 components)

- Feedback / Alerts / 04-with-link-on-right

### initials (2 components)

- Elements / Avatars / 08-circular-with-placeholder-initials
- Lists / Grid Lists / 03-simple-cards

### inline (7 components)

- Elements / Button Groups / 01-basic
- Forms / Input Groups / 10-input-with-inline-add-on
- Forms / Input Groups / 11-input-with-inline-leading-and-trailing-add-ons
- Forms / Input Groups / 12-input-with-inline-leading-dropdown
- Forms / Input Groups / 13-input-with-inline-leading-add-on-and-trailing-dropdown
- Forms / Radio Groups / 02-simple-inline-list
- Headings / Section Headings / 08-with-inline-tabs

### inline-actions (1 components)

- Data Display / Description Lists / 05-left-aligned-with-inline-actions

### inline-description (3 components)

- Forms / Checkboxes / 02-list-with-inline-description
- Forms / Radio Groups / 04-list-with-inline-description
- Forms / Toggles / 05-with-right-label

### inline-links (2 components)

- Lists / Stacked Lists / 03-with-inline-links-and-avatar-group
- Lists / Stacked Lists / 04-with-inline-links-and-actions-menu

### input (24 components)

- Forms / Action Panels / 06-with-input
- Forms / Input Groups / 01-input-with-label
- Forms / Input Groups / 02-input-with-label-and-help-text
- Forms / Input Groups / 03-input-with-validation-error
- Forms / Input Groups / 04-input-with-disabled-state
- Forms / Input Groups / 05-input-with-hidden-label
- Forms / Input Groups / 06-input-with-corner-hint
- Forms / Input Groups / 07-input-with-leading-icon
- Forms / Input Groups / 08-input-with-trailing-icon
- Forms / Input Groups / 09-input-with-add-on
- Forms / Input Groups / 10-input-with-inline-add-on
- Forms / Input Groups / 11-input-with-inline-leading-and-trailing-add-ons
- Forms / Input Groups / 12-input-with-inline-leading-dropdown
- Forms / Input Groups / 13-input-with-inline-leading-add-on-and-trailing-dropdown
- Forms / Input Groups / 14-input-with-leading-icon-and-trailing-button
- Forms / Input Groups / 15-inputs-with-shared-borders
- Forms / Input Groups / 16-input-with-inset-label
- Forms / Input Groups / 17-inputs-with-inset-labels-and-shared-borders
- Forms / Input Groups / 18-input-with-overlapping-label
- Forms / Input Groups / 19-input-with-pill-shape
- Forms / Input Groups / 20-input-with-gray-background-and-bottom-border
- Forms / Input Groups / 21-input-with-keyboard-shortcut
- Forms / Textareas / 04-with-title-and-pill-actions
- Headings / Section Headings / 05-with-input-group

### input-group (1 components)

- Headings / Section Headings / 05-with-input-group

### inset (4 components)

- Forms / Input Groups / 16-input-with-inset-label
- Forms / Input Groups / 17-inputs-with-inset-labels-and-shared-borders
- Layout / Cards / 08-well
- Layout / Cards / 09-well-on-gray

### interactive (4 components)

- Elements / Badges / 05-with-border-and-remove-button
- Elements / Badges / 10-flat-with-remove-button
- Lists / Tables / 13-with-sortable-headings
- Lists / Tables / 17-with-checkboxes

### invite (1 components)

- Overlays / Notifications / 06-with-buttons-below

### invoice (1 components)

- Lists / Tables / 15-with-summary-rows

### invoices (1 components)

- Lists / Grid Lists / 07-logos-cards-with-description-list

### kbd (1 components)

- Forms / Input Groups / 21-input-with-keyboard-shortcut

### keyboard-shortcut (1 components)

- Forms / Input Groups / 21-input-with-keyboard-shortcut

### label (31 components)

- Elements / Badges / 01-with-border
- Elements / Badges / 02-with-border-and-dot
- Elements / Badges / 03-pill-with-border
- Elements / Badges / 04-pill-with-border-and-dot
- Elements / Badges / 05-with-border-and-remove-button
- Elements / Badges / 06-flat
- Elements / Badges / 07-flat-pill
- Elements / Badges / 08-flat-with-dot
- Elements / Badges / 09-flat-pill-with-dot
- Elements / Badges / 10-flat-with-remove-button
- Elements / Badges / 11-small-with-border
- Elements / Badges / 12-small-flat
- Elements / Badges / 13-small-pill-with-border
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 15-small-flat-with-dot
- Elements / Badges / 16-small-flat-pill-with-dot
- Forms / Input Groups / 01-input-with-label
- Forms / Input Groups / 02-input-with-label-and-help-text
- Forms / Input Groups / 06-input-with-corner-hint
- Forms / Input Groups / 16-input-with-inset-label
- Forms / Input Groups / 17-inputs-with-inset-labels-and-shared-borders
- Forms / Input Groups / 18-input-with-overlapping-label
- Forms / Input Groups / 19-input-with-pill-shape
- Forms / Input Groups / 20-input-with-gray-background-and-bottom-border
- Forms / Input Groups / 21-input-with-keyboard-shortcut
- Forms / Textareas / 04-with-title-and-pill-actions
- Forms / Toggles / 04-with-left-label-and-description
- Forms / Toggles / 05-with-right-label
- Headings / Section Headings / 09-with-label
- Layout / Dividers / 01-with-label
- Layout / Dividers / 03-with-label-on-left

### labels-left (1 components)

- Forms / Form Layouts / 04-labels-on-left

### layout (13 components)

- Application Shells / Stacked Layouts / 01-with-bottom-border
- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Forms / Form Layouts / 01-stacked
- Forms / Form Layouts / 02-two-column
- Forms / Form Layouts / 03-two-column-with-cards
- Forms / Form Layouts / 04-labels-on-left

### leading-icon (2 components)

- Elements / Buttons / 04-buttons-with-leading-icon
- Forms / Input Groups / 07-input-with-leading-icon

### left-aligned (3 components)

- Layout / Dividers / 03-with-label-on-left
- Layout / Dividers / 05-with-title-on-left
- Overlays / Modal Dialogs / 06-simple-alert-with-left-aligned-buttons

### line-clamp (1 components)

- Lists / Stacked Lists / 13-narrow-with-truncated-content

### link (4 components)

- Elements / Avatars / 11-with-text
- Feedback / Alerts / 04-with-link-on-right
- Feedback / Alerts / 05-with-accent-border
- Forms / Action Panels / 02-with-link

### links (1 components)

- Lists / Grid Lists / 04-horizontal-link-cards

### list (27 components)

- Feedback / Alerts / 02-with-list
- Feedback / Empty States / 03-with-starting-points
- Feedback / Empty States / 04-with-recommendations
- Feedback / Empty States / 05-with-templates
- Layout / List Containers / 01-simple-with-dividers
- Layout / List Containers / 02-card-with-dividers
- Layout / List Containers / 03-card-with-dividers-full-width-mobile
- Layout / List Containers / 04-separate-cards
- Layout / List Containers / 05-separate-cards-full-width-mobile
- Layout / List Containers / 06-flat-card-with-dividers
- Layout / List Containers / 07-simple-with-dividers-full-width-mobile
- Lists / Feeds / 01-simple-with-icons
- Lists / Stacked Lists / 01-simple
- Lists / Stacked Lists / 02-with-links
- Lists / Stacked Lists / 03-with-inline-links-and-avatar-group
- Lists / Stacked Lists / 04-with-inline-links-and-actions-menu
- Lists / Stacked Lists / 05-with-badges-button-and-actions-menu
- Lists / Stacked Lists / 06-in-card-with-links
- Lists / Stacked Lists / 07-two-columns-with-links
- Lists / Stacked Lists / 08-full-width-with-links
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Stacked Lists / 10-narrow
- Lists / Stacked Lists / 11-narrow-with-sticky-headings
- Lists / Stacked Lists / 12-narrow-with-actions
- Lists / Stacked Lists / 13-narrow-with-truncated-content
- Lists / Stacked Lists / 14-narrow-with-small-avatars
- Lists / Stacked Lists / 15-narrow-with-badges

### listbox (6 components)

- Forms / Select Menus / 02-simple-custom
- Forms / Select Menus / 03-custom-with-check-on-left
- Forms / Select Menus / 04-custom-with-status-indicator
- Forms / Select Menus / 05-custom-with-avatar
- Forms / Select Menus / 06-with-secondary-text
- Forms / Select Menus / 07-branded-with-supported-text

### login (4 components)

- Forms / Sign-in and Registration / 01-simple
- Forms / Sign-in and Registration / 02-simple-no-labels
- Forms / Sign-in and Registration / 03-split-screen
- Forms / Sign-in and Registration / 04-simple-card

### logo (6 components)

- Headings / Page Headings / 09-with-logo-meta-and-actions
- Navigation / Sidebar Navigation / 01-light
- Navigation / Sidebar Navigation / 02-dark
- Navigation / Sidebar Navigation / 03-with-expandable-sections
- Navigation / Sidebar Navigation / 04-with-secondary-navigation
- Navigation / Sidebar Navigation / 05-brand

### logos (1 components)

- Lists / Grid Lists / 07-logos-cards-with-description-list

### markdown (1 components)

- Forms / Textareas / 05-with-preview-button

### max-width (8 components)

- Application Shells / Multi-Column Layouts / 03-constrained-three-column
- Application Shells / Multi-Column Layouts / 04-constrained-with-sticky-columns
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Layout / Containers / 01-full-width-mobile-constrained-padded
- Layout / Containers / 02-constrained-with-padded-content
- Layout / Containers / 05-narrow-constrained-with-padded-content
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Tables / 04-full-width-with-constrained-content

### media-object (8 components)

- Layout / Media Objects / 01-basic
- Layout / Media Objects / 02-aligned-to-center
- Layout / Media Objects / 03-aligned-to-bottom
- Layout / Media Objects / 04-stretched-to-fit
- Layout / Media Objects / 05-media-on-right
- Layout / Media Objects / 06-basic-responsive
- Layout / Media Objects / 07-wide-responsive
- Layout / Media Objects / 08-nested

### meetings (3 components)

- Data Display / Calendars / 01-small-with-meetings
- Data Display / Calendars / 07-borderless-stacked
- Data Display / Calendars / 08-borderless-side-by-side

### menu (9 components)

- Elements / Dropdowns / 01-simple
- Elements / Dropdowns / 02-with-dividers
- Elements / Dropdowns / 03-with-icons
- Elements / Dropdowns / 04-with-minimal-menu-icon
- Elements / Dropdowns / 05-with-simple-header
- Headings / Card Headings / 06-with-avatar-meta-and-dropdown
- Headings / Section Headings / 10-with-badge-and-dropdown
- Lists / Grid Lists / 07-logos-cards-with-description-list
- Overlays / Drawers / 09-user-profile-example

### message (1 components)

- Overlays / Notifications / 04-with-avatar

### metadata (7 components)

- Headings / Card Headings / 06-with-avatar-meta-and-dropdown
- Headings / Page Headings / 03-with-meta-and-actions
- Headings / Page Headings / 05-with-avatar-and-actions
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Headings / Page Headings / 09-with-logo-meta-and-actions
- Headings / Section Headings / 09-with-label
- Headings / Section Headings / 10-with-badge-and-dropdown

### metrics (5 components)

- Data Display / Stats / 01-with-trending
- Data Display / Stats / 02-simple
- Data Display / Stats / 03-simple-in-cards
- Data Display / Stats / 04-with-brand-icon
- Data Display / Stats / 05-with-shared-borders

### minimal (4 components)

- Elements / Dropdowns / 04-with-minimal-menu-icon
- Forms / Input Groups / 05-input-with-hidden-label
- Lists / Stacked Lists / 10-narrow
- Navigation / Pagination / 03-simple-card-footer

### mixed-content (1 components)

- Lists / Feeds / 03-with-multiple-item-types

### mobile (7 components)

- Layout / Cards / 02-card-edge-to-edge-mobile
- Layout / Cards / 10-well-edge-to-edge-mobile
- Layout / List Containers / 03-card-with-dividers-full-width-mobile
- Layout / List Containers / 05-separate-cards-full-width-mobile
- Layout / List Containers / 07-simple-with-dividers-full-width-mobile
- Layout / Media Objects / 06-basic-responsive
- Layout / Media Objects / 07-wide-responsive

### mobile-first (2 components)

- Lists / Tables / 07-with-stacked-columns-on-mobile
- Lists / Tables / 08-with-hidden-columns-on-mobile

### mobile-menu (32 components)

- Application Shells / Multi-Column Layouts / 01-full-width-three-column
- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right
- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Application Shells / Sidebar Layouts / 01-simple-sidebar
- Application Shells / Sidebar Layouts / 02-simple-dark-sidebar
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 06-with-off-white-background
- Application Shells / Sidebar Layouts / 07-simple-brand-sidebar
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Application Shells / Stacked Layouts / 01-with-bottom-border
- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Navigation / Navbars / 01-simple-dark-menu-left
- Navigation / Navbars / 02-dark-quick-action
- Navigation / Navbars / 03-simple-dark
- Navigation / Navbars / 04-simple-menu-left
- Navigation / Navbars / 05-simple
- Navigation / Navbars / 06-with-quick-action
- Navigation / Navbars / 07-dark-with-search
- Navigation / Navbars / 08-with-search
- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links
- Navigation / Navbars / 11-with-search-in-column-layout

### mobile-padding (2 components)

- Layout / Containers / 02-constrained-with-padded-content
- Layout / Containers / 04-breakpoint-constrained-with-padded-content

### modal (6 components)

- Overlays / Modal Dialogs / 01-centered-with-single-action
- Overlays / Modal Dialogs / 02-centered-with-wide-buttons
- Overlays / Modal Dialogs / 03-simple-alert
- Overlays / Modal Dialogs / 04-simple-with-dismiss-button
- Overlays / Modal Dialogs / 05-simple-with-gray-footer
- Overlays / Modal Dialogs / 06-simple-alert-with-left-aligned-buttons

### month-view (1 components)

- Data Display / Calendars / 02-month-view

### mood (2 components)

- Forms / Textareas / 02-with-avatar-and-actions
- Forms / Textareas / 03-with-underline-and-actions

### mood-selector (1 components)

- Lists / Feeds / 02-with-comments

### multi-action (2 components)

- Overlays / Notifications / 03-with-actions-below
- Overlays / Notifications / 05-with-split-buttons

### multi-button (1 components)

- Overlays / Notifications / 06-with-buttons-below

### multi-column (6 components)

- Application Shells / Multi-Column Layouts / 01-full-width-three-column
- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right
- Application Shells / Multi-Column Layouts / 03-constrained-three-column
- Application Shells / Multi-Column Layouts / 04-constrained-with-sticky-columns
- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header

### multi-line (4 components)

- Lists / Tables / 09-with-avatars-and-multi-line-content
- Lists / Tables / 15-with-summary-rows
- Lists / Tables / 16-with-border
- Lists / Tables / 18-with-hidden-headings

### multi-section (3 components)

- Forms / Form Layouts / 01-stacked
- Forms / Form Layouts / 02-two-column
- Forms / Form Layouts / 03-two-column-with-cards

### multi-step (7 components)

- Navigation / Progress Bars / 01-simple
- Navigation / Progress Bars / 02-panels
- Navigation / Progress Bars / 03-bullets
- Navigation / Progress Bars / 04-panels-with-border
- Navigation / Progress Bars / 05-circles
- Navigation / Progress Bars / 06-bullets-and-text
- Navigation / Progress Bars / 07-circles-with-text

### multiple-sizes (8 components)

- Elements / Buttons / 01-primary-buttons
- Elements / Buttons / 02-secondary-buttons
- Elements / Buttons / 03-soft-buttons
- Elements / Buttons / 04-buttons-with-leading-icon
- Elements / Buttons / 05-buttons-with-trailing-icon
- Elements / Buttons / 06-rounded-primary-buttons
- Elements / Buttons / 07-rounded-secondary-buttons
- Elements / Buttons / 08-circular-buttons

### narrow (7 components)

- Data Display / Description Lists / 06-narrow-with-hidden-labels
- Layout / Containers / 05-narrow-constrained-with-padded-content
- Lists / Stacked Lists / 10-narrow
- Lists / Stacked Lists / 11-narrow-with-sticky-headings
- Lists / Stacked Lists / 12-narrow-with-actions
- Lists / Stacked Lists / 13-narrow-with-truncated-content
- Lists / Stacked Lists / 14-narrow-with-small-avatars

### narrow-sidebar (2 components)

- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header

### native (1 components)

- Forms / Select Menus / 01-simple-native

### navbar (11 components)

- Navigation / Navbars / 01-simple-dark-menu-left
- Navigation / Navbars / 02-dark-quick-action
- Navigation / Navbars / 03-simple-dark
- Navigation / Navbars / 04-simple-menu-left
- Navigation / Navbars / 05-simple
- Navigation / Navbars / 06-with-quick-action
- Navigation / Navbars / 07-dark-with-search
- Navigation / Navbars / 08-with-search
- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links
- Navigation / Navbars / 11-with-search-in-column-layout

### navigation (73 components)

- Application Shells / Multi-Column Layouts / 01-full-width-three-column
- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right
- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Application Shells / Sidebar Layouts / 01-simple-sidebar
- Application Shells / Sidebar Layouts / 02-simple-dark-sidebar
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 06-with-off-white-background
- Application Shells / Sidebar Layouts / 07-simple-brand-sidebar
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Application Shells / Stacked Layouts / 01-with-bottom-border
- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Elements / Button Groups / 02-icon-only
- Headings / Page Headings / 02-with-actions-and-breadcrumbs
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Headings / Section Headings / 06-with-tabs
- Headings / Section Headings / 07-with-actions-and-tabs
- Headings / Section Headings / 08-with-inline-tabs
- Navigation / Breadcrumbs / 01-contained
- Navigation / Breadcrumbs / 02-full-width-bar
- Navigation / Breadcrumbs / 03-simple-with-chevrons
- Navigation / Breadcrumbs / 04-simple-with-slashes
- Navigation / Navbars / 01-simple-dark-menu-left
- Navigation / Navbars / 02-dark-quick-action
- Navigation / Navbars / 03-simple-dark
- Navigation / Navbars / 04-simple-menu-left
- Navigation / Navbars / 05-simple
- Navigation / Navbars / 06-with-quick-action
- Navigation / Navbars / 07-dark-with-search
- Navigation / Navbars / 08-with-search
- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links
- Navigation / Navbars / 11-with-search-in-column-layout
- Navigation / Pagination / 01-card-footer-with-page-buttons
- Navigation / Pagination / 02-centered-page-numbers
- Navigation / Pagination / 03-simple-card-footer
- Navigation / Progress Bars / 01-simple
- Navigation / Progress Bars / 02-panels
- Navigation / Progress Bars / 03-bullets
- Navigation / Progress Bars / 04-panels-with-border
- Navigation / Progress Bars / 05-circles
- Navigation / Progress Bars / 06-bullets-and-text
- Navigation / Progress Bars / 07-circles-with-text
- Navigation / Progress Bars / 08-progress-bar
- Navigation / Sidebar Navigation / 01-light
- Navigation / Sidebar Navigation / 02-dark
- Navigation / Sidebar Navigation / 03-with-expandable-sections
- Navigation / Sidebar Navigation / 04-with-secondary-navigation
- Navigation / Sidebar Navigation / 05-brand
- Navigation / Tabs / 01-tabs-underline
- Navigation / Tabs / 02-tabs-underline-icons
- Navigation / Tabs / 03-tabs-pills
- Navigation / Tabs / 04-tabs-pills-gray
- Navigation / Tabs / 05-tabs-pills-brand
- Navigation / Tabs / 06-full-width-underline
- Navigation / Tabs / 07-bar-underline
- Navigation / Tabs / 08-tabs-underline-badges
- Navigation / Tabs / 09-simple
- Navigation / Vertical Navigation / 01-simple
- Navigation / Vertical Navigation / 02-with-badges
- Navigation / Vertical Navigation / 03-with-icons-and-badges
- Navigation / Vertical Navigation / 04-with-icons
- Navigation / Vertical Navigation / 05-with-secondary-navigation
- Navigation / Vertical Navigation / 06-on-gray

### nested (4 components)

- Layout / Containers / 05-narrow-constrained-with-padded-content
- Layout / Media Objects / 08-nested
- Navigation / Sidebar Navigation / 03-with-expandable-sections
- Navigation / Sidebar Navigation / 04-with-secondary-navigation

### no-border (9 components)

- Elements / Badges / 06-flat
- Elements / Badges / 07-flat-pill
- Elements / Badges / 08-flat-with-dot
- Elements / Badges / 09-flat-pill-with-dot
- Elements / Badges / 10-flat-with-remove-button
- Elements / Badges / 12-small-flat
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 15-small-flat-with-dot
- Elements / Badges / 16-small-flat-pill-with-dot

### notification (7 components)

- Feedback / Alerts / 01-with-description
- Overlays / Notifications / 01-simple
- Overlays / Notifications / 02-condensed
- Overlays / Notifications / 03-with-actions-below
- Overlays / Notifications / 04-with-avatar
- Overlays / Notifications / 05-with-split-buttons
- Overlays / Notifications / 06-with-buttons-below

### notification-badge (4 components)

- Elements / Avatars / 03-circular-with-top-notification
- Elements / Avatars / 04-rounded-with-top-notification
- Elements / Avatars / 05-circular-with-bottom-notification
- Elements / Avatars / 06-rounded-with-bottom-notification

### notifications (21 components)

- Application Shells / Multi-Column Layouts / 03-constrained-three-column
- Application Shells / Multi-Column Layouts / 04-constrained-with-sticky-columns
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Application Shells / Stacked Layouts / 01-with-bottom-border
- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Navigation / Navbars / 07-dark-with-search
- Navigation / Navbars / 08-with-search
- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links
- Navigation / Navbars / 11-with-search-in-column-layout

### oauth (2 components)

- Forms / Sign-in and Registration / 03-split-screen
- Forms / Sign-in and Registration / 04-simple-card

### online (1 components)

- Forms / Select Menus / 04-custom-with-status-indicator

### online-status (2 components)

- Elements / Avatars / 05-circular-with-bottom-notification
- Elements / Avatars / 06-rounded-with-bottom-notification

### optional (1 components)

- Forms / Input Groups / 06-input-with-corner-hint

### options (1 components)

- Elements / Dropdowns / 01-simple

### outlined (2 components)

- Elements / Buttons / 02-secondary-buttons
- Elements / Buttons / 07-rounded-secondary-buttons

### overflow (11 components)

- Lists / Tables / 01-simple
- Lists / Tables / 02-simple-in-card
- Lists / Tables / 03-full-width
- Lists / Tables / 05-with-striped-rows
- Lists / Tables / 06-with-uppercase-headings
- Lists / Tables / 09-with-avatars-and-multi-line-content
- Lists / Tables / 11-with-vertical-lines
- Lists / Tables / 12-with-condensed-content
- Lists / Tables / 13-with-sortable-headings
- Lists / Tables / 14-with-grouped-rows
- Lists / Tables / 17-with-checkboxes

### overlap (3 components)

- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap

### overlapping (1 components)

- Forms / Input Groups / 18-input-with-overlapping-label

### overlay (15 components)

- Overlays / Drawers / 01-empty
- Overlays / Drawers / 02-wide-empty
- Overlays / Drawers / 03-with-background-overlay
- Overlays / Drawers / 04-with-close-button-on-outside
- Overlays / Drawers / 05-with-branded-header
- Overlays / Drawers / 06-with-sticky-footer
- Overlays / Drawers / 07-create-project-form-example
- Overlays / Drawers / 08-wide-create-project-form-example
- Overlays / Drawers / 09-user-profile-example
- Overlays / Modal Dialogs / 01-centered-with-single-action
- Overlays / Modal Dialogs / 02-centered-with-wide-buttons
- Overlays / Modal Dialogs / 03-simple-alert
- Overlays / Modal Dialogs / 04-simple-with-dismiss-button
- Overlays / Modal Dialogs / 05-simple-with-gray-footer
- Overlays / Modal Dialogs / 06-simple-alert-with-left-aligned-buttons

### padding (5 components)

- Layout / Containers / 01-full-width-mobile-constrained-padded
- Layout / Containers / 02-constrained-with-padded-content
- Layout / Containers / 03-breakpoint-constrained-padded-above-mobile
- Layout / Containers / 04-breakpoint-constrained-with-padded-content
- Layout / Containers / 05-narrow-constrained-with-padded-content

### page-header (2 components)

- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header

### page-title (5 components)

- Headings / Page Headings / 01-with-actions
- Headings / Page Headings / 02-with-actions-and-breadcrumbs
- Headings / Page Headings / 03-with-meta-and-actions
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Headings / Page Headings / 08-with-filters-and-action

### pagination (4 components)

- Elements / Button Groups / 02-icon-only
- Navigation / Pagination / 01-card-footer-with-page-buttons
- Navigation / Pagination / 02-centered-page-numbers
- Navigation / Pagination / 03-simple-card-footer

### panel (7 components)

- Forms / Radio Groups / 08-list-with-descriptions-in-panel
- Overlays / Drawers / 01-empty
- Overlays / Drawers / 02-wide-empty
- Overlays / Drawers / 03-with-background-overlay
- Overlays / Drawers / 04-with-close-button-on-outside
- Overlays / Drawers / 05-with-branded-header
- Overlays / Drawers / 06-with-sticky-footer

### panels (2 components)

- Navigation / Progress Bars / 02-panels
- Navigation / Progress Bars / 04-panels-with-border

### payment-method (1 components)

- Forms / Action Panels / 08-with-well

### people (10 components)

- Lists / Stacked Lists / 01-simple
- Lists / Stacked Lists / 02-with-links
- Lists / Stacked Lists / 04-with-inline-links-and-actions-menu
- Lists / Stacked Lists / 06-in-card-with-links
- Lists / Stacked Lists / 07-two-columns-with-links
- Lists / Stacked Lists / 08-full-width-with-links
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Stacked Lists / 10-narrow
- Lists / Stacked Lists / 11-narrow-with-sticky-headings
- Lists / Stacked Lists / 12-narrow-with-actions

### percentage (1 components)

- Navigation / Progress Bars / 08-progress-bar

### permission (1 components)

- Overlays / Notifications / 05-with-split-buttons

### phone (1 components)

- Forms / Input Groups / 12-input-with-inline-leading-dropdown

### pill (10 components)

- Elements / Badges / 03-pill-with-border
- Elements / Badges / 04-pill-with-border-and-dot
- Elements / Badges / 07-flat-pill
- Elements / Badges / 09-flat-pill-with-dot
- Elements / Badges / 13-small-pill-with-border
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 16-small-flat-pill-with-dot
- Elements / Buttons / 06-rounded-primary-buttons
- Elements / Buttons / 07-rounded-secondary-buttons
- Forms / Input Groups / 19-input-with-pill-shape

### pill-buttons (1 components)

- Forms / Textareas / 04-with-title-and-pill-actions

### pills (3 components)

- Navigation / Tabs / 03-tabs-pills
- Navigation / Tabs / 04-tabs-pills-gray
- Navigation / Tabs / 05-tabs-pills-brand

### placeholder (2 components)

- Elements / Avatars / 07-circular-with-placeholder-icon
- Elements / Avatars / 08-circular-with-placeholder-initials

### plans (1 components)

- Lists / Tables / 16-with-border

### popover (1 components)

- Navigation / Navbars / 11-with-search-in-column-layout

### prefix (2 components)

- Forms / Input Groups / 09-input-with-add-on
- Forms / Input Groups / 10-input-with-inline-add-on

### preview (1 components)

- Forms / Textareas / 05-with-preview-button

### price (2 components)

- Forms / Input Groups / 11-input-with-inline-leading-and-trailing-add-ons
- Forms / Input Groups / 13-input-with-inline-leading-add-on-and-trailing-dropdown

### pricing (1 components)

- Lists / Tables / 16-with-border

### primary (2 components)

- Elements / Buttons / 01-primary-buttons
- Elements / Buttons / 06-rounded-primary-buttons

### profile (18 components)

- Elements / Avatars / 01-circular-avatars
- Elements / Avatars / 02-rounded-avatars
- Elements / Avatars / 03-circular-with-top-notification
- Elements / Avatars / 04-rounded-with-top-notification
- Elements / Avatars / 05-circular-with-bottom-notification
- Elements / Avatars / 06-rounded-with-bottom-notification
- Elements / Avatars / 11-with-text
- Headings / Card Headings / 03-with-avatar-and-actions
- Headings / Card Headings / 06-with-avatar-meta-and-dropdown
- Headings / Page Headings / 04-with-banner-image
- Headings / Page Headings / 05-with-avatar-and-actions
- Headings / Page Headings / 06-card-with-avatar-and-stats
- Navigation / Sidebar Navigation / 01-light
- Navigation / Sidebar Navigation / 02-dark
- Navigation / Sidebar Navigation / 03-with-expandable-sections
- Navigation / Sidebar Navigation / 04-with-secondary-navigation
- Navigation / Sidebar Navigation / 05-brand
- Overlays / Drawers / 09-user-profile-example

### profile-dropdown (19 components)

- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Application Shells / Stacked Layouts / 01-with-bottom-border
- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Navigation / Navbars / 07-dark-with-search
- Navigation / Navbars / 08-with-search
- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links
- Navigation / Navbars / 11-with-search-in-column-layout

### progress (8 components)

- Navigation / Progress Bars / 01-simple
- Navigation / Progress Bars / 02-panels
- Navigation / Progress Bars / 03-bullets
- Navigation / Progress Bars / 04-panels-with-border
- Navigation / Progress Bars / 05-circles
- Navigation / Progress Bars / 06-bullets-and-text
- Navigation / Progress Bars / 07-circles-with-text
- Navigation / Progress Bars / 08-progress-bar

### progressive-disclosure (6 components)

- Lists / Tables / 04-full-width-with-constrained-content
- Lists / Tables / 07-with-stacked-columns-on-mobile
- Lists / Tables / 08-with-hidden-columns-on-mobile
- Lists / Tables / 10-with-sticky-header
- Lists / Tables / 16-with-border
- Lists / Tables / 19-full-width-with-avatars

### project (2 components)

- Overlays / Drawers / 07-create-project-form-example
- Overlays / Drawers / 08-wide-create-project-form-example

### projects (2 components)

- Lists / Grid Lists / 03-simple-cards
- Lists / Stacked Lists / 05-with-badges-button-and-actions-menu

### radio-group (12 components)

- Forms / Radio Groups / 01-simple-list
- Forms / Radio Groups / 02-simple-inline-list
- Forms / Radio Groups / 03-list-with-description
- Forms / Radio Groups / 04-list-with-inline-description
- Forms / Radio Groups / 05-list-with-radio-on-right
- Forms / Radio Groups / 06-simple-list-with-radio-on-right
- Forms / Radio Groups / 07-simple-table
- Forms / Radio Groups / 08-list-with-descriptions-in-panel
- Forms / Radio Groups / 09-color-picker
- Forms / Radio Groups / 10-cards
- Forms / Radio Groups / 11-small-cards
- Forms / Radio Groups / 12-stacked-cards

### recommendations (2 components)

- Feedback / Empty States / 04-with-recommendations
- Feedback / Empty States / 06-with-recommendations-grid

### remember-me (1 components)

- Forms / Sign-in and Registration / 02-simple-no-labels

### removable (2 components)

- Elements / Badges / 05-with-border-and-remove-button
- Elements / Badges / 10-flat-with-remove-button

### responsive (146 components)

- Application Shells / Multi-Column Layouts / 01-full-width-three-column
- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right
- Application Shells / Multi-Column Layouts / 03-constrained-three-column
- Application Shells / Multi-Column Layouts / 04-constrained-with-sticky-columns
- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Application Shells / Sidebar Layouts / 01-simple-sidebar
- Application Shells / Sidebar Layouts / 02-simple-dark-sidebar
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 06-with-off-white-background
- Application Shells / Sidebar Layouts / 07-simple-brand-sidebar
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Application Shells / Stacked Layouts / 01-with-bottom-border
- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Data Display / Calendars / 01-small-with-meetings
- Data Display / Calendars / 02-month-view
- Data Display / Calendars / 03-week-view
- Data Display / Calendars / 04-day-view
- Data Display / Calendars / 05-year-view
- Data Display / Calendars / 06-double
- Data Display / Calendars / 07-borderless-stacked
- Data Display / Calendars / 08-borderless-side-by-side
- Data Display / Description Lists / 01-left-aligned
- Data Display / Description Lists / 02-left-aligned-in-card
- Data Display / Description Lists / 03-left-aligned-striped
- Data Display / Description Lists / 04-two-column
- Data Display / Description Lists / 05-left-aligned-with-inline-actions
- Data Display / Stats / 01-with-trending
- Data Display / Stats / 02-simple
- Data Display / Stats / 03-simple-in-cards
- Data Display / Stats / 04-with-brand-icon
- Data Display / Stats / 05-with-shared-borders
- Feedback / Alerts / 04-with-link-on-right
- Forms / Action Panels / 03-with-button-on-right
- Forms / Action Panels / 04-with-button-at-top-right
- Forms / Action Panels / 05-with-toggle
- Forms / Action Panels / 06-with-input
- Forms / Action Panels / 08-with-well
- Forms / Form Layouts / 01-stacked
- Forms / Form Layouts / 02-two-column
- Forms / Form Layouts / 03-two-column-with-cards
- Forms / Form Layouts / 04-labels-on-left
- Forms / Radio Groups / 02-simple-inline-list
- Forms / Radio Groups / 07-simple-table
- Forms / Radio Groups / 12-stacked-cards
- Headings / Card Headings / 02-with-action
- Headings / Card Headings / 03-with-avatar-and-actions
- Headings / Card Headings / 04-with-description-and-action
- Headings / Page Headings / 01-with-actions
- Headings / Page Headings / 02-with-actions-and-breadcrumbs
- Headings / Page Headings / 03-with-meta-and-actions
- Headings / Page Headings / 04-with-banner-image
- Headings / Page Headings / 05-with-avatar-and-actions
- Headings / Page Headings / 06-card-with-avatar-and-stats
- Headings / Page Headings / 07-with-meta-actions-and-breadcrumbs
- Headings / Page Headings / 08-with-filters-and-action
- Headings / Page Headings / 09-with-logo-meta-and-actions
- Headings / Section Headings / 03-with-actions
- Headings / Section Headings / 04-with-action
- Headings / Section Headings / 05-with-input-group
- Headings / Section Headings / 06-with-tabs
- Headings / Section Headings / 07-with-actions-and-tabs
- Headings / Section Headings / 08-with-inline-tabs
- Headings / Section Headings / 09-with-label
- Headings / Section Headings / 10-with-badge-and-dropdown
- Layout / Cards / 02-card-edge-to-edge-mobile
- Layout / Cards / 10-well-edge-to-edge-mobile
- Layout / Containers / 01-full-width-mobile-constrained-padded
- Layout / Containers / 02-constrained-with-padded-content
- Layout / Containers / 03-breakpoint-constrained-padded-above-mobile
- Layout / Containers / 04-breakpoint-constrained-with-padded-content
- Layout / Containers / 05-narrow-constrained-with-padded-content
- Layout / List Containers / 03-card-with-dividers-full-width-mobile
- Layout / List Containers / 05-separate-cards-full-width-mobile
- Layout / List Containers / 07-simple-with-dividers-full-width-mobile
- Layout / Media Objects / 06-basic-responsive
- Layout / Media Objects / 07-wide-responsive
- Lists / Grid Lists / 01-contact-cards-with-small-portraits
- Lists / Grid Lists / 02-contact-cards
- Lists / Grid Lists / 03-simple-cards
- Lists / Grid Lists / 04-horizontal-link-cards
- Lists / Grid Lists / 05-actions-with-shared-borders
- Lists / Grid Lists / 06-images-with-details
- Lists / Grid Lists / 07-logos-cards-with-description-list
- Lists / Stacked Lists / 01-simple
- Lists / Stacked Lists / 02-with-links
- Lists / Stacked Lists / 03-with-inline-links-and-avatar-group
- Lists / Stacked Lists / 04-with-inline-links-and-actions-menu
- Lists / Stacked Lists / 05-with-badges-button-and-actions-menu
- Lists / Stacked Lists / 06-in-card-with-links
- Lists / Stacked Lists / 07-two-columns-with-links
- Lists / Stacked Lists / 08-full-width-with-links
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Tables / 01-simple
- Lists / Tables / 02-simple-in-card
- Lists / Tables / 03-full-width
- Lists / Tables / 04-full-width-with-constrained-content
- Lists / Tables / 05-with-striped-rows
- Lists / Tables / 06-with-uppercase-headings
- Lists / Tables / 07-with-stacked-columns-on-mobile
- Lists / Tables / 08-with-hidden-columns-on-mobile
- Lists / Tables / 09-with-avatars-and-multi-line-content
- Lists / Tables / 10-with-sticky-header
- Lists / Tables / 11-with-vertical-lines
- Lists / Tables / 12-with-condensed-content
- Lists / Tables / 13-with-sortable-headings
- Lists / Tables / 14-with-grouped-rows
- Lists / Tables / 15-with-summary-rows
- Lists / Tables / 16-with-border
- Lists / Tables / 17-with-checkboxes
- Lists / Tables / 18-with-hidden-headings
- Lists / Tables / 19-full-width-with-avatars
- Navigation / Breadcrumbs / 02-full-width-bar
- Navigation / Navbars / 01-simple-dark-menu-left
- Navigation / Navbars / 02-dark-quick-action
- Navigation / Navbars / 03-simple-dark
- Navigation / Navbars / 04-simple-menu-left
- Navigation / Navbars / 05-simple
- Navigation / Navbars / 06-with-quick-action
- Navigation / Navbars / 07-dark-with-search
- Navigation / Navbars / 08-with-search
- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links
- Navigation / Navbars / 11-with-search-in-column-layout
- Navigation / Pagination / 01-card-footer-with-page-buttons
- Navigation / Progress Bars / 01-simple
- Navigation / Progress Bars / 02-panels
- Navigation / Progress Bars / 04-panels-with-border
- Navigation / Progress Bars / 08-progress-bar
- Navigation / Tabs / 02-tabs-underline-icons
- Navigation / Tabs / 03-tabs-pills
- Navigation / Tabs / 04-tabs-pills-gray
- Navigation / Tabs / 05-tabs-pills-brand
- Navigation / Tabs / 06-full-width-underline
- Navigation / Tabs / 07-bar-underline
- Navigation / Tabs / 08-tabs-underline-badges
- Navigation / Tabs / 09-simple

### reversed (1 components)

- Layout / Media Objects / 05-media-on-right

### right-aligned (4 components)

- Forms / Checkboxes / 03-list-with-checkbox-on-right
- Forms / Checkboxes / 04-simple-list-with-heading
- Forms / Radio Groups / 05-list-with-radio-on-right
- Forms / Radio Groups / 06-simple-list-with-radio-on-right

### right-sidebar (1 components)

- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right

### ring (1 components)

- Lists / Tables / 16-with-border

### rounded (8 components)

- Elements / Avatars / 02-rounded-avatars
- Elements / Avatars / 04-rounded-with-top-notification
- Elements / Avatars / 06-rounded-with-bottom-notification
- Elements / Buttons / 06-rounded-primary-buttons
- Elements / Buttons / 07-rounded-secondary-buttons
- Layout / Cards / 01-basic-card
- Lists / Tables / 02-simple-in-card
- Lists / Tables / 16-with-border

### rounded-full (8 components)

- Elements / Badges / 03-pill-with-border
- Elements / Badges / 04-pill-with-border-and-dot
- Elements / Badges / 07-flat-pill
- Elements / Badges / 09-flat-pill-with-dot
- Elements / Badges / 13-small-pill-with-border
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 16-small-flat-pill-with-dot
- Forms / Input Groups / 19-input-with-pill-shape

### scrollable (2 components)

- Lists / Stacked Lists / 11-narrow-with-sticky-headings
- Lists / Tables / 10-with-sticky-header

### search (19 components)

- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Forms / Comboboxes / 01-simple
- Forms / Comboboxes / 02-with-status-indicator
- Forms / Comboboxes / 03-with-image
- Forms / Comboboxes / 04-with-secondary-text
- Forms / Input Groups / 14-input-with-leading-icon-and-trailing-button
- Forms / Input Groups / 21-input-with-keyboard-shortcut
- Headings / Section Headings / 05-with-input-group
- Navigation / Navbars / 07-dark-with-search
- Navigation / Navbars / 08-with-search
- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links
- Navigation / Navbars / 11-with-search-in-column-layout

### secondary (3 components)

- Elements / Buttons / 02-secondary-buttons
- Elements / Buttons / 07-rounded-secondary-buttons
- Forms / Action Panels / 07-simple-well

### secondary-nav (2 components)

- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links

### secondary-navigation (3 components)

- Navigation / Sidebar Navigation / 04-with-secondary-navigation
- Navigation / Vertical Navigation / 05-with-secondary-navigation
- Navigation / Vertical Navigation / 06-on-gray

### secondary-text (2 components)

- Forms / Comboboxes / 04-with-secondary-text
- Forms / Select Menus / 06-with-secondary-text

### section (10 components)

- Headings / Section Headings / 01-simple
- Headings / Section Headings / 02-with-description
- Headings / Section Headings / 03-with-actions
- Headings / Section Headings / 04-with-action
- Headings / Section Headings / 05-with-input-group
- Headings / Section Headings / 06-with-tabs
- Headings / Section Headings / 07-with-actions-and-tabs
- Headings / Section Headings / 08-with-inline-tabs
- Headings / Section Headings / 09-with-label
- Headings / Section Headings / 10-with-badge-and-dropdown

### sections (6 components)

- Layout / Cards / 03-card-with-header
- Layout / Cards / 04-card-with-footer
- Layout / Cards / 05-card-with-header-and-footer
- Layout / Cards / 06-card-with-gray-footer
- Layout / Cards / 07-card-with-gray-body
- Lists / Tables / 14-with-grouped-rows

### segmented (1 components)

- Elements / Button Groups / 01-basic

### select (12 components)

- Elements / Button Groups / 05-with-checkbox-and-dropdown
- Feedback / Empty States / 06-with-recommendations-grid
- Forms / Input Groups / 12-input-with-inline-leading-dropdown
- Forms / Input Groups / 13-input-with-inline-leading-add-on-and-trailing-dropdown
- Forms / Input Groups / 15-inputs-with-shared-borders
- Forms / Select Menus / 01-simple-native
- Forms / Select Menus / 02-simple-custom
- Forms / Select Menus / 03-custom-with-check-on-left
- Forms / Select Menus / 04-custom-with-status-indicator
- Forms / Select Menus / 05-custom-with-avatar
- Forms / Select Menus / 06-with-secondary-text
- Forms / Select Menus / 07-branded-with-supported-text

### selection (1 components)

- Lists / Tables / 17-with-checkboxes

### separated (2 components)

- Layout / List Containers / 04-separate-cards
- Layout / List Containers / 05-separate-cards-full-width-mobile

### separator (10 components)

- Layout / Dividers / 01-with-label
- Layout / Dividers / 02-with-icon
- Layout / Dividers / 03-with-label-on-left
- Layout / Dividers / 04-with-title
- Layout / Dividers / 05-with-title-on-left
- Layout / Dividers / 06-with-button
- Layout / Dividers / 07-with-title-and-button
- Layout / Dividers / 08-with-toolbar
- Navigation / Breadcrumbs / 01-contained
- Navigation / Breadcrumbs / 02-full-width-bar

### shadow (2 components)

- Layout / Cards / 01-basic-card
- Layout / List Containers / 02-card-with-dividers

### shared-borders (4 components)

- Data Display / Stats / 05-with-shared-borders
- Forms / Input Groups / 15-inputs-with-shared-borders
- Forms / Input Groups / 17-inputs-with-inset-labels-and-shared-borders
- Forms / Sign-in and Registration / 02-simple-no-labels

### side-by-side (1 components)

- Data Display / Calendars / 08-borderless-side-by-side

### sidebar (24 components)

- Application Shells / Multi-Column Layouts / 01-full-width-three-column
- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right
- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header
- Application Shells / Sidebar Layouts / 01-simple-sidebar
- Application Shells / Sidebar Layouts / 02-simple-dark-sidebar
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 06-with-off-white-background
- Application Shells / Sidebar Layouts / 07-simple-brand-sidebar
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Data Display / Calendars / 04-day-view
- Navigation / Sidebar Navigation / 01-light
- Navigation / Sidebar Navigation / 02-dark
- Navigation / Sidebar Navigation / 03-with-expandable-sections
- Navigation / Sidebar Navigation / 04-with-secondary-navigation
- Navigation / Sidebar Navigation / 05-brand
- Navigation / Vertical Navigation / 01-simple
- Navigation / Vertical Navigation / 02-with-badges
- Navigation / Vertical Navigation / 03-with-icons-and-badges
- Navigation / Vertical Navigation / 04-with-icons
- Navigation / Vertical Navigation / 05-with-secondary-navigation
- Navigation / Vertical Navigation / 06-on-gray

### sign-in (4 components)

- Forms / Sign-in and Registration / 01-simple
- Forms / Sign-in and Registration / 02-simple-no-labels
- Forms / Sign-in and Registration / 03-split-screen
- Forms / Sign-in and Registration / 04-simple-card

### simple (16 components)

- Data Display / Stats / 02-simple
- Data Display / Stats / 03-simple-in-cards
- Forms / Checkboxes / 04-simple-list-with-heading
- Forms / Radio Groups / 01-simple-list
- Forms / Radio Groups / 06-simple-list-with-radio-on-right
- Headings / Card Headings / 01-simple
- Headings / Card Headings / 05-with-description
- Headings / Section Headings / 01-simple
- Layout / List Containers / 01-simple-with-dividers
- Layout / List Containers / 07-simple-with-dividers-full-width-mobile
- Lists / Tables / 01-simple
- Navigation / Breadcrumbs / 03-simple-with-chevrons
- Navigation / Breadcrumbs / 04-simple-with-slashes
- Navigation / Pagination / 03-simple-card-footer
- Navigation / Tabs / 09-simple
- Navigation / Vertical Navigation / 01-simple

### sizes (10 components)

- Elements / Avatars / 01-circular-avatars
- Elements / Avatars / 02-rounded-avatars
- Elements / Avatars / 03-circular-with-top-notification
- Elements / Avatars / 04-rounded-with-top-notification
- Elements / Avatars / 05-circular-with-bottom-notification
- Elements / Avatars / 06-rounded-with-bottom-notification
- Elements / Avatars / 07-circular-with-placeholder-icon
- Elements / Avatars / 08-circular-with-placeholder-initials
- Elements / Avatars / 09-avatar-group-stacked-bottom-to-top
- Elements / Avatars / 10-avatar-group-stacked-top-to-bottom

### slash-separator (1 components)

- Navigation / Breadcrumbs / 04-simple-with-slashes

### slide-over (9 components)

- Overlays / Drawers / 01-empty
- Overlays / Drawers / 02-wide-empty
- Overlays / Drawers / 03-with-background-overlay
- Overlays / Drawers / 04-with-close-button-on-outside
- Overlays / Drawers / 05-with-branded-header
- Overlays / Drawers / 06-with-sticky-footer
- Overlays / Drawers / 07-create-project-form-example
- Overlays / Drawers / 08-wide-create-project-form-example
- Overlays / Drawers / 09-user-profile-example

### small (6 components)

- Elements / Badges / 11-small-with-border
- Elements / Badges / 12-small-flat
- Elements / Badges / 13-small-pill-with-border
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 15-small-flat-with-dot
- Elements / Badges / 16-small-flat-pill-with-dot

### small-avatar (1 components)

- Lists / Stacked Lists / 14-narrow-with-small-avatars

### social (1 components)

- Headings / Card Headings / 06-with-avatar-meta-and-dropdown

### social-login (2 components)

- Forms / Sign-in and Registration / 03-split-screen
- Forms / Sign-in and Registration / 04-simple-card

### soft (1 components)

- Elements / Buttons / 03-soft-buttons

### sortable (1 components)

- Lists / Tables / 13-with-sortable-headings

### split-button (2 components)

- Elements / Button Groups / 04-with-dropdown
- Forms / Select Menus / 07-branded-with-supported-text

### split-buttons (1 components)

- Overlays / Notifications / 05-with-split-buttons

### split-screen (1 components)

- Forms / Sign-in and Registration / 03-split-screen

### stacked (17 components)

- Application Shells / Stacked Layouts / 01-with-bottom-border
- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 03-with-lighter-page-header
- Application Shells / Stacked Layouts / 04-branded-nav-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 05-with-overlap
- Application Shells / Stacked Layouts / 06-brand-nav-with-overlap
- Application Shells / Stacked Layouts / 07-branded-nav-with-lighter-page-header
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header
- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Data Display / Calendars / 07-borderless-stacked
- Elements / Avatars / 09-avatar-group-stacked-bottom-to-top
- Elements / Avatars / 10-avatar-group-stacked-top-to-bottom
- Forms / Form Layouts / 01-stacked
- Forms / Radio Groups / 12-stacked-cards
- Layout / List Containers / 04-separate-cards
- Layout / Media Objects / 06-basic-responsive
- Lists / Tables / 07-with-stacked-columns-on-mobile

### stat (1 components)

- Elements / Button Groups / 03-with-stat

### stateful (1 components)

- Lists / Tables / 17-with-checkboxes

### stats (6 components)

- Data Display / Stats / 01-with-trending
- Data Display / Stats / 02-simple
- Data Display / Stats / 03-simple-in-cards
- Data Display / Stats / 04-with-brand-icon
- Data Display / Stats / 05-with-shared-borders
- Headings / Page Headings / 06-card-with-avatar-and-stats

### status (21 components)

- Elements / Badges / 01-with-border
- Elements / Badges / 02-with-border-and-dot
- Elements / Badges / 03-pill-with-border
- Elements / Badges / 04-pill-with-border-and-dot
- Elements / Badges / 05-with-border-and-remove-button
- Elements / Badges / 06-flat
- Elements / Badges / 07-flat-pill
- Elements / Badges / 08-flat-with-dot
- Elements / Badges / 09-flat-pill-with-dot
- Elements / Badges / 10-flat-with-remove-button
- Elements / Badges / 11-small-with-border
- Elements / Badges / 12-small-flat
- Elements / Badges / 13-small-pill-with-border
- Elements / Badges / 14-small-flat-pill
- Elements / Badges / 15-small-flat-with-dot
- Elements / Badges / 16-small-flat-pill-with-dot
- Forms / Select Menus / 04-custom-with-status-indicator
- Headings / Section Headings / 10-with-badge-and-dropdown
- Lists / Stacked Lists / 05-with-badges-button-and-actions-menu
- Lists / Tables / 09-with-avatars-and-multi-line-content
- Lists / Tables / 18-with-hidden-headings

### status-icon (1 components)

- Lists / Stacked Lists / 03-with-inline-links-and-avatar-group

### status-indicator (20 components)

- Elements / Avatars / 03-circular-with-top-notification
- Elements / Avatars / 04-rounded-with-top-notification
- Elements / Avatars / 05-circular-with-bottom-notification
- Elements / Avatars / 06-rounded-with-bottom-notification
- Elements / Badges / 02-with-border-and-dot
- Elements / Badges / 04-pill-with-border-and-dot
- Elements / Badges / 08-flat-with-dot
- Elements / Badges / 09-flat-pill-with-dot
- Elements / Badges / 15-small-flat-with-dot
- Elements / Badges / 16-small-flat-pill-with-dot
- Forms / Comboboxes / 02-with-status-indicator
- Lists / Stacked Lists / 01-simple
- Lists / Stacked Lists / 02-with-links
- Lists / Stacked Lists / 04-with-inline-links-and-actions-menu
- Lists / Stacked Lists / 06-in-card-with-links
- Lists / Stacked Lists / 07-two-columns-with-links
- Lists / Stacked Lists / 08-full-width-with-links
- Lists / Stacked Lists / 09-full-width-with-constrained-content
- Lists / Stacked Lists / 15-narrow-with-badges
- Lists / Tables / 19-full-width-with-avatars

### steps (8 components)

- Navigation / Progress Bars / 01-simple
- Navigation / Progress Bars / 02-panels
- Navigation / Progress Bars / 03-bullets
- Navigation / Progress Bars / 04-panels-with-border
- Navigation / Progress Bars / 05-circles
- Navigation / Progress Bars / 06-bullets-and-text
- Navigation / Progress Bars / 07-circles-with-text
- Navigation / Progress Bars / 08-progress-bar

### sticky (2 components)

- Application Shells / Multi-Column Layouts / 04-constrained-with-sticky-columns
- Lists / Tables / 10-with-sticky-header

### sticky-footer (1 components)

- Overlays / Drawers / 06-with-sticky-footer

### sticky-headers (1 components)

- Lists / Stacked Lists / 11-narrow-with-sticky-headings

### stretched (1 components)

- Layout / Media Objects / 04-stretched-to-fit

### striped (2 components)

- Data Display / Description Lists / 03-left-aligned-striped
- Lists / Tables / 05-with-striped-rows

### subheadings (1 components)

- Lists / Tables / 14-with-grouped-rows

### subtle-background (2 components)

- Application Shells / Stacked Layouts / 02-on-subtle-background
- Application Shells / Stacked Layouts / 08-with-compact-lighter-page-header

### success (4 components)

- Feedback / Alerts / 03-with-actions
- Feedback / Alerts / 06-with-dismiss-button
- Overlays / Modal Dialogs / 01-centered-with-single-action
- Overlays / Notifications / 01-simple

### summary (1 components)

- Lists / Tables / 15-with-summary-rows

### svg (1 components)

- Forms / Toggles / 03-toggle-with-icon

### svg-icon (2 components)

- Forms / Checkboxes / 01-list-with-description
- Forms / Checkboxes / 02-list-with-inline-description

### switch (6 components)

- Forms / Action Panels / 05-with-toggle
- Forms / Toggles / 01-simple-toggle
- Forms / Toggles / 02-short-toggle
- Forms / Toggles / 03-toggle-with-icon
- Forms / Toggles / 04-with-left-label-and-description
- Forms / Toggles / 05-with-right-label

### table (19 components)

- Lists / Tables / 01-simple
- Lists / Tables / 02-simple-in-card
- Lists / Tables / 03-full-width
- Lists / Tables / 04-full-width-with-constrained-content
- Lists / Tables / 05-with-striped-rows
- Lists / Tables / 06-with-uppercase-headings
- Lists / Tables / 07-with-stacked-columns-on-mobile
- Lists / Tables / 08-with-hidden-columns-on-mobile
- Lists / Tables / 09-with-avatars-and-multi-line-content
- Lists / Tables / 10-with-sticky-header
- Lists / Tables / 11-with-vertical-lines
- Lists / Tables / 12-with-condensed-content
- Lists / Tables / 13-with-sortable-headings
- Lists / Tables / 14-with-grouped-rows
- Lists / Tables / 15-with-summary-rows
- Lists / Tables / 16-with-border
- Lists / Tables / 17-with-checkboxes
- Lists / Tables / 18-with-hidden-headings
- Lists / Tables / 19-full-width-with-avatars

### table-layout (1 components)

- Forms / Radio Groups / 07-simple-table

### tabs (14 components)

- Forms / Textareas / 05-with-preview-button
- Headings / Page Headings / 08-with-filters-and-action
- Headings / Section Headings / 06-with-tabs
- Headings / Section Headings / 07-with-actions-and-tabs
- Headings / Section Headings / 08-with-inline-tabs
- Navigation / Tabs / 01-tabs-underline
- Navigation / Tabs / 02-tabs-underline-icons
- Navigation / Tabs / 03-tabs-pills
- Navigation / Tabs / 04-tabs-pills-gray
- Navigation / Tabs / 05-tabs-pills-brand
- Navigation / Tabs / 06-full-width-underline
- Navigation / Tabs / 07-bar-underline
- Navigation / Tabs / 08-tabs-underline-badges
- Navigation / Tabs / 09-simple

### tags (1 components)

- Lists / Feeds / 03-with-multiple-item-types

### team (2 components)

- Elements / Avatars / 09-avatar-group-stacked-bottom-to-top
- Elements / Avatars / 10-avatar-group-stacked-top-to-bottom

### teams (13 components)

- Application Shells / Multi-Column Layouts / 01-full-width-three-column
- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right
- Application Shells / Sidebar Layouts / 01-simple-sidebar
- Application Shells / Sidebar Layouts / 02-simple-dark-sidebar
- Application Shells / Sidebar Layouts / 03-sidebar-with-header
- Application Shells / Sidebar Layouts / 04-dark-sidebar-with-header
- Application Shells / Sidebar Layouts / 05-with-constrained-content-area
- Application Shells / Sidebar Layouts / 06-with-off-white-background
- Application Shells / Sidebar Layouts / 07-simple-brand-sidebar
- Application Shells / Sidebar Layouts / 08-brand-sidebar-with-header
- Navigation / Sidebar Navigation / 01-light
- Navigation / Sidebar Navigation / 02-dark
- Navigation / Sidebar Navigation / 05-brand

### templates (2 components)

- Feedback / Empty States / 03-with-starting-points
- Feedback / Empty States / 05-with-templates

### text-labels (1 components)

- Navigation / Progress Bars / 06-bullets-and-text

### textarea (5 components)

- Forms / Textareas / 01-simple
- Forms / Textareas / 02-with-avatar-and-actions
- Forms / Textareas / 03-with-underline-and-actions
- Forms / Textareas / 04-with-title-and-pill-actions
- Forms / Textareas / 05-with-preview-button

### threaded (1 components)

- Layout / Media Objects / 08-nested

### three-column (6 components)

- Application Shells / Multi-Column Layouts / 01-full-width-three-column
- Application Shells / Multi-Column Layouts / 02-full-width-secondary-column-on-right
- Application Shells / Multi-Column Layouts / 03-constrained-three-column
- Application Shells / Multi-Column Layouts / 04-constrained-with-sticky-columns
- Application Shells / Multi-Column Layouts / 05-full-width-with-narrow-sidebar
- Application Shells / Multi-Column Layouts / 06-full-width-with-narrow-sidebar-and-header

### time-slots (2 components)

- Data Display / Calendars / 03-week-view
- Data Display / Calendars / 04-day-view

### timeline (4 components)

- Lists / Feeds / 01-simple-with-icons
- Lists / Feeds / 02-with-comments
- Lists / Feeds / 03-with-multiple-item-types
- Lists / Tables / 18-with-hidden-headings

### timestamp (2 components)

- Lists / Stacked Lists / 13-narrow-with-truncated-content
- Lists / Stacked Lists / 14-narrow-with-small-avatars

### tinted (1 components)

- Elements / Buttons / 03-soft-buttons

### title (4 components)

- Forms / Textareas / 04-with-title-and-pill-actions
- Layout / Dividers / 04-with-title
- Layout / Dividers / 05-with-title-on-left
- Layout / Dividers / 07-with-title-and-button

### toast (6 components)

- Overlays / Notifications / 01-simple
- Overlays / Notifications / 02-condensed
- Overlays / Notifications / 03-with-actions-below
- Overlays / Notifications / 04-with-avatar
- Overlays / Notifications / 05-with-split-buttons
- Overlays / Notifications / 06-with-buttons-below

### toggle (6 components)

- Forms / Action Panels / 05-with-toggle
- Forms / Toggles / 01-simple-toggle
- Forms / Toggles / 02-short-toggle
- Forms / Toggles / 03-toggle-with-icon
- Forms / Toggles / 04-with-left-label-and-description
- Forms / Toggles / 05-with-right-label

### toolbar (5 components)

- Forms / Textareas / 02-with-avatar-and-actions
- Forms / Textareas / 03-with-underline-and-actions
- Forms / Textareas / 04-with-title-and-pill-actions
- Forms / Textareas / 05-with-preview-button
- Layout / Dividers / 08-with-toolbar

### totals (1 components)

- Lists / Tables / 15-with-summary-rows

### trailing-icon (2 components)

- Elements / Buttons / 05-buttons-with-trailing-icon
- Forms / Input Groups / 08-input-with-trailing-icon

### transactions (2 components)

- Lists / Tables / 12-with-condensed-content
- Lists / Tables / 18-with-hidden-headings

### transition (6 components)

- Overlays / Notifications / 01-simple
- Overlays / Notifications / 02-condensed
- Overlays / Notifications / 03-with-actions-below
- Overlays / Notifications / 04-with-avatar
- Overlays / Notifications / 05-with-split-buttons
- Overlays / Notifications / 06-with-buttons-below

### trending (3 components)

- Data Display / Stats / 01-with-trending
- Data Display / Stats / 04-with-brand-icon
- Data Display / Stats / 05-with-shared-borders

### truncated (1 components)

- Lists / Stacked Lists / 13-narrow-with-truncated-content

### two-button (1 components)

- Overlays / Modal Dialogs / 02-centered-with-wide-buttons

### two-column (4 components)

- Data Display / Description Lists / 04-two-column
- Forms / Form Layouts / 02-two-column
- Forms / Form Layouts / 03-two-column-with-cards
- Lists / Stacked Lists / 07-two-columns-with-links

### two-row (3 components)

- Application Shells / Stacked Layouts / 09-two-row-navigation-with-overlap
- Navigation / Navbars / 09-dark-with-centered-search-and-secondary-links
- Navigation / Navbars / 10-with-centered-search-and-secondary-links

### underline (5 components)

- Forms / Input Groups / 20-input-with-gray-background-and-bottom-border
- Forms / Textareas / 03-with-underline-and-actions
- Navigation / Navbars / 04-simple-menu-left
- Navigation / Navbars / 05-simple
- Navigation / Navbars / 06-with-quick-action

### undo (1 components)

- Overlays / Notifications / 02-condensed

### uppercase (1 components)

- Lists / Tables / 06-with-uppercase-headings

### url (2 components)

- Forms / Input Groups / 09-input-with-add-on
- Forms / Input Groups / 10-input-with-inline-add-on

### user (2 components)

- Forms / Select Menus / 05-custom-with-avatar
- Overlays / Drawers / 09-user-profile-example

### user-context (1 components)

- Elements / Dropdowns / 05-with-simple-header

### user-info (1 components)

- Elements / Avatars / 11-with-text

### username (1 components)

- Forms / Select Menus / 06-with-secondary-text

### users (14 components)

- Lists / Tables / 01-simple
- Lists / Tables / 02-simple-in-card
- Lists / Tables / 03-full-width
- Lists / Tables / 04-full-width-with-constrained-content
- Lists / Tables / 05-with-striped-rows
- Lists / Tables / 06-with-uppercase-headings
- Lists / Tables / 07-with-stacked-columns-on-mobile
- Lists / Tables / 08-with-hidden-columns-on-mobile
- Lists / Tables / 09-with-avatars-and-multi-line-content
- Lists / Tables / 10-with-sticky-header
- Lists / Tables / 11-with-vertical-lines
- Lists / Tables / 13-with-sortable-headings
- Lists / Tables / 14-with-grouped-rows
- Lists / Tables / 17-with-checkboxes

### validation (3 components)

- Feedback / Alerts / 02-with-list
- Forms / Form Layouts / 01-stacked
- Forms / Input Groups / 03-input-with-validation-error

### vertical (2 components)

- Navigation / Progress Bars / 06-bullets-and-text
- Navigation / Progress Bars / 07-circles-with-text

### vertical-borders (1 components)

- Lists / Tables / 11-with-vertical-lines

### vertical-navigation (6 components)

- Navigation / Vertical Navigation / 01-simple
- Navigation / Vertical Navigation / 02-with-badges
- Navigation / Vertical Navigation / 03-with-icons-and-badges
- Navigation / Vertical Navigation / 04-with-icons
- Navigation / Vertical Navigation / 05-with-secondary-navigation
- Navigation / Vertical Navigation / 06-on-gray

### visual-selection (1 components)

- Forms / Radio Groups / 09-color-picker

### warning (3 components)

- Feedback / Alerts / 01-with-description
- Feedback / Alerts / 05-with-accent-border
- Overlays / Modal Dialogs / 03-simple-alert

### week-view (1 components)

- Data Display / Calendars / 03-week-view

### well (5 components)

- Forms / Action Panels / 07-simple-well
- Forms / Action Panels / 08-with-well
- Layout / Cards / 08-well
- Layout / Cards / 09-well-on-gray
- Layout / Cards / 10-well-edge-to-edge-mobile

### wide (2 components)

- Overlays / Drawers / 02-wide-empty
- Overlays / Drawers / 08-wide-create-project-form-example

### write-preview (1 components)

- Forms / Textareas / 05-with-preview-button

### year-view (1 components)

- Data Display / Calendars / 05-year-view

### z-index (1 components)

- Elements / Avatars / 10-avatar-group-stacked-top-to-bottom

### zebra (1 components)

- Lists / Tables / 05-with-striped-rows


---

## Use Case Recommendations

Common use cases mapped to recommended components.

### Dashboard Layout

Building a full dashboard with navigation and content areas

**Recommended Components:**

- **Application Shells / Stacked Layouts** (9 variants)
  - `01-with-bottom-border`: With bottom border
  - `02-on-subtle-background`: On subtle background
  - `03-with-lighter-page-header`: With lighter page header
  - _...and 6 more_
- **Application Shells / Sidebar Layouts** (8 variants)
  - `01-simple-sidebar`: Simple sidebar
  - `02-simple-dark-sidebar`: Simple dark sidebar
  - `03-sidebar-with-header`: Sidebar with header
  - _...and 5 more_
- **Navigation / Navbars** (11 variants)
  - `01-simple-dark-menu-left`: Simple dark with menu button on left
  - `02-dark-quick-action`: Dark with quick action
  - `03-simple-dark`: Simple dark
  - _...and 8 more_
- **Navigation / Sidebar Navigation** (5 variants)
  - `01-light`: Light
  - `02-dark`: Dark
  - `03-with-expandable-sections`: With expandable sections
  - _...and 2 more_
- **Data Display / Stats** (5 variants)
  - `01-with-trending`: With trending
  - `02-simple`: Simple
  - `03-simple-in-cards`: Simple in cards
  - _...and 2 more_

### Login/Authentication Page

User sign-in and registration interfaces

**Recommended Components:**

- **Forms / Sign-in and Registration** (4 variants)
  - `01-simple`: Simple
  - `02-simple-no-labels`: Simple no labels
  - `03-split-screen`: Split screen
  - _...and 1 more_

### Data Table with Filters

Displaying tabular data with search and filtering

**Recommended Components:**

- **Lists / Tables** (19 variants)
  - `01-simple`: Simple
  - `02-simple-in-card`: Simple in card
  - `03-full-width`: Full width
  - _...and 16 more_
- **Headings / Section Headings** (10 variants)
  - `01-simple`: Simple
  - `02-with-description`: With description
  - `03-with-actions`: With actions
  - _...and 7 more_
- **Forms / Input Groups** (21 variants)
  - `01-input-with-label`: Input with label
  - `02-input-with-label-and-help-text`: Input with label and help text
  - `03-input-with-validation-error`: Input with validation error
  - _...and 18 more_
- **Navigation / Pagination** (3 variants)
  - `01-card-footer-with-page-buttons`: Card footer with page buttons
  - `02-centered-page-numbers`: Centered page numbers
  - `03-simple-card-footer`: Simple card footer

### User Profile Page

Displaying and editing user information

**Recommended Components:**

- **Headings / Page Headings** (9 variants)
  - `01-with-actions`: With actions
  - `02-with-actions-and-breadcrumbs`: With actions and breadcrumbs
  - `03-with-meta-and-actions`: With meta and actions
  - _...and 6 more_
- **Data Display / Description Lists** (6 variants)
  - `01-left-aligned`: Left-aligned
  - `02-left-aligned-in-card`: Left-aligned in card
  - `03-left-aligned-striped`: Left-aligned striped
  - _...and 3 more_
- **Forms / Form Layouts** (4 variants)
  - `01-stacked`: Stacked
  - `02-two-column`: Two-column
  - `03-two-column-with-cards`: Two-column with cards
  - _...and 1 more_
- **Elements / Avatars** (11 variants)
  - `01-circular-avatars`: Circular avatars
  - `02-rounded-avatars`: Rounded avatars
  - `03-circular-with-top-notification`: Circular avatars with top notification
  - _...and 8 more_

### Content Feed

Social media or news feed style layouts

**Recommended Components:**

- **Lists / Feeds** (3 variants)
  - `01-simple-with-icons`: Simple with icons
  - `02-with-comments`: With comments
  - `03-with-multiple-item-types`: With multiple item types
- **Headings / Card Headings** (6 variants)
  - `01-simple`: Simple
  - `02-with-action`: With action
  - `03-with-avatar-and-actions`: With avatar and actions
  - _...and 3 more_
- **Elements / Avatars** (11 variants)
  - `01-circular-avatars`: Circular avatars
  - `02-rounded-avatars`: Rounded avatars
  - `03-circular-with-top-notification`: Circular avatars with top notification
  - _...and 8 more_

### Settings Page

Application or user settings interface

**Recommended Components:**

- **Forms / Form Layouts** (4 variants)
  - `01-stacked`: Stacked
  - `02-two-column`: Two-column
  - `03-two-column-with-cards`: Two-column with cards
  - _...and 1 more_
- **Forms / Toggles** (5 variants)
  - `01-simple-toggle`: Simple toggle
  - `02-short-toggle`: Short toggle
  - `03-toggle-with-icon`: Toggle with icon
  - _...and 2 more_
- **Forms / Action Panels** (8 variants)
  - `01-simple`: Simple
  - `02-with-link`: With link
  - `03-with-button-on-right`: With button on right
  - _...and 5 more_
- **Headings / Section Headings** (10 variants)
  - `01-simple`: Simple
  - `02-with-description`: With description
  - `03-with-actions`: With actions
  - _...and 7 more_

### E-commerce Product Page

Product details and purchase interface

**Recommended Components:**

- **Headings / Page Headings** (9 variants)
  - `01-with-actions`: With actions
  - `02-with-actions-and-breadcrumbs`: With actions and breadcrumbs
  - `03-with-meta-and-actions`: With meta and actions
  - _...and 6 more_
- **Elements / Buttons** (8 variants)
  - `01-primary-buttons`: Primary buttons
  - `02-secondary-buttons`: Secondary buttons
  - `03-soft-buttons`: Soft buttons
  - _...and 5 more_
- **Forms / Select Menus** (7 variants)
  - `01-simple-native`: Simple native
  - `02-simple-custom`: Simple custom
  - `03-custom-with-check-on-left`: Custom with check on left
  - _...and 4 more_
- **Lists / Grid Lists** (7 variants)
  - `01-contact-cards-with-small-portraits`: Contact cards with small portraits
  - `02-contact-cards`: Contact cards
  - `03-simple-cards`: Simple cards
  - _...and 4 more_

### Calendar/Scheduling App

Event scheduling and calendar views

**Recommended Components:**

- **Data Display / Calendars** (8 variants)
  - `01-small-with-meetings`: Small with meetings
  - `02-month-view`: Month view
  - `03-week-view`: Week view
  - _...and 5 more_
- **Navigation / Tabs** (9 variants)
  - `01-tabs-underline`: Tabs with underline
  - `02-tabs-underline-icons`: Tabs with underline and icons
  - `03-tabs-pills`: Tabs in pills
  - _...and 6 more_
- **Forms / Form Layouts** (4 variants)
  - `01-stacked`: Stacked
  - `02-two-column`: Two-column
  - `03-two-column-with-cards`: Two-column with cards
  - _...and 1 more_

### Admin Panel

Backend administration interface

**Recommended Components:**

- **Application Shells / Sidebar Layouts** (8 variants)
  - `01-simple-sidebar`: Simple sidebar
  - `02-simple-dark-sidebar`: Simple dark sidebar
  - `03-sidebar-with-header`: Sidebar with header
  - _...and 5 more_
- **Lists / Tables** (19 variants)
  - `01-simple`: Simple
  - `02-simple-in-card`: Simple in card
  - `03-full-width`: Full width
  - _...and 16 more_
- **Elements / Badges** (16 variants)
  - `01-with-border`: With border
  - `02-with-border-and-dot`: With border and dot
  - `03-pill-with-border`: Pill with border
  - _...and 13 more_
- **Feedback / Alerts** (6 variants)
  - `01-with-description`: With description
  - `02-with-list`: With list
  - `03-with-actions`: With actions
  - _...and 3 more_
- **Navigation / Breadcrumbs** (4 variants)
  - `01-contained`: Contained
  - `02-full-width-bar`: Full-width bar
  - `03-simple-with-chevrons`: Simple with chevrons
  - _...and 1 more_

### Form Wizard/Multi-Step Process

Guided multi-step forms or processes

**Recommended Components:**

- **Navigation / Progress Bars** (8 variants)
  - `01-simple`: Simple
  - `02-panels`: Panels
  - `03-bullets`: Bullets
  - _...and 5 more_
- **Forms / Form Layouts** (4 variants)
  - `01-stacked`: Stacked
  - `02-two-column`: Two-column
  - `03-two-column-with-cards`: Two-column with cards
  - _...and 1 more_
- **Elements / Buttons** (8 variants)
  - `01-primary-buttons`: Primary buttons
  - `02-secondary-buttons`: Secondary buttons
  - `03-soft-buttons`: Soft buttons
  - _...and 5 more_
- **Headings / Section Headings** (10 variants)
  - `01-simple`: Simple
  - `02-with-description`: With description
  - `03-with-actions`: With actions
  - _...and 7 more_

### Empty States

Handling no data or initial states

**Recommended Components:**

- **Feedback / Empty States** (6 variants)
  - `01-simple`: Simple
  - `02-with-dashed-border`: With dashed border
  - `03-with-starting-points`: With starting points
  - _...and 3 more_

### Notifications Center

Displaying system or user notifications

**Recommended Components:**

- **Lists / Feeds** (3 variants)
  - `01-simple-with-icons`: Simple with icons
  - `02-with-comments`: With comments
  - `03-with-multiple-item-types`: With multiple item types
- **Overlays / Notifications** (6 variants)
  - `01-simple`: Simple
  - `02-condensed`: Condensed
  - `03-with-actions-below`: With actions below
  - _...and 3 more_
- **Elements / Badges** (16 variants)
  - `01-with-border`: With border
  - `02-with-border-and-dot`: With border and dot
  - `03-pill-with-border`: Pill with border
  - _...and 13 more_


---

## Component Statistics

### Components by Category

- **Application Shells**: 23 components
- **Data Display**: 19 components
- **Elements**: 45 components
- **Feedback**: 12 components
- **Forms**: 74 components
- **Headings**: 25 components
- **Layout**: 38 components
- **Lists**: 44 components
- **Navigation**: 46 components
- **Overlays**: 21 components

### Most Common Tags

- **responsive**: 146 components
- **dark**: 74 components
- **navigation**: 73 components
- **card**: 40 components
- **avatar**: 35 components
- **mobile-menu**: 32 components
- **label**: 31 components
- **form-field**: 31 components
- **dropdown**: 27 components
- **list**: 27 components
- **heading**: 27 components
- **button**: 25 components
- **form-control**: 25 components
- **sidebar**: 24 components
- **input**: 24 components
- **icons**: 23 components
- **actions**: 22 components
- **notifications**: 21 components
- **status**: 21 components
- **status-indicator**: 20 components

### Technology Stack

- **Framework**: React
- **Styling**: Tailwind CSS v4.1
- **Common Dependencies**: @headlessui/react, @heroicons/react

### Accessibility Features

Most components include:
- Semantic HTML landmarks
- ARIA attributes and labels
- Screen reader support
- Keyboard navigation
- Focus management

---

## Quick Reference

### File Path Pattern

```
application-ui/{category}/{element}/{variant-number}-{variant-name}.md
```

### Using Components

1. Browse by **Category** for general component types
2. Search by **Tag** for specific features (dark mode, responsive, etc.)
3. Check **Use Case Recommendations** for complete page patterns
4. Review frontmatter for dependencies and accessibility notes

---

*Generated from 347 component files*
