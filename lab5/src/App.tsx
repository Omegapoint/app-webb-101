import './App.css';

function App() {
  return <div className="container">
    <div className="header clearfix">
      <h3 className="text-muted">Labb 5</h3>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">📖 &nbsp; Instructions</h3>
          </div>
          <div className="panel-body">
            <ol className="instructions">
              <li>
                Right here, using GitHub Copilot, replace the content of this
                component with a web application written with React that
                presents the schedule for a week.
              </li>
              <li>
                The application should contain one column for each displayed
                day of the week, where events can be presented.
              </li>
              <li>
                Event size does not need to be proportional to event duration.
              </li>
              <li>
                It should be possible to add a new event using an appropriately
                labeled and placed button. Clicking it should show a component
                where the user can enter a label, a time span, a location, and
                a color.
              </li>
              <li>
                There should be a button that hides all other buttons so the
                schedule can be screenshotted without unnecessary visual
                components.
              </li>
              <li>
                Events should be editable (color, label, time span, and
                location) and deletable.
              </li>
              <li>
                By default, Monday-Sunday should be displayed. Days should be
                removable/addable as long as the total number of displayed days
                remains between 1 and 7.
              </li>
              <li>
                Example: if Monday-Sunday is displayed, Monday or Sunday should
                be removable. If Friday-Tuesday is displayed, it should be
                possible to add Thursday at the beginning or Wednesday at the
                end.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default App;
