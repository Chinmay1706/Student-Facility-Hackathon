import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/student/Login";
import AuthState from "./components/context/auth/AuthState";
import AlertState from "./components/context/alert/AlertState";
import Alerts from "./layouts/Alerts";
import { Fragment, useEffect, useState } from "react";
import Navbar from "./layouts/sidebar/Navbar";
import Sidebar from "./layouts/sidebar";
import FacultyHome from "./pages/Faculty/FacultyHome";
import RequestBonafide from "./pages/Student/RequestBonafide";
import UserState from "./components/context/user/UserState";
import Subjectallocation from "./pages/Student/Subjectallocation";
import Academic from "./pages/Student/Academic";
import Profile from "./pages/Student/Profile";
import ScholarshipQueries from "./pages/Student/ScholarshipQueries";
import Home from "./pages/Student/Home";
import Query from "./pages/Student/Query";
import ElectiveRegistration from "./pages/Faculty/ElectiveRegistration";
import Result from "./pages/Student/Result";
import ScholarshipsAvailable from "./pages/Student/ScholarshipsAvailable";
import LetterFormats from "./pages/Student/LetterFormats";
import SemesterCreditRegistration from "./pages/Student/SemesterCreditRegistration";
import ManageResult from "./pages/Faculty/ManageResult";
import ElectiveAllocation from "./pages/Faculty/ElectiveAllocation";
import StudentSectionHome from "./pages/StudentSection/StudentSectionHome";
import Notifications from "./pages/Student/Notifications";
import UpdateProfile from "./pages/Student/UpdateProfile";
import StudentSectionNotifications from "./pages/StudentSection/StudentSectionNotifications";
import Bonafides from "./pages/StudentSection/Bonafides";
import LetterFormat from "./pages/StudentSection/LetterFormat";
import Queries from "./pages/StudentSection/Queries";
import UploadMarks from "./pages/Faculty/UploadMarks";
import FeeReceiptForm from "./pages/Student/FeeReceiptForm";
import LeavingCertificateForm from "./pages/Student/LeavingCertificateForm";
import FAQ from "./pages/Student/FAQ";
import { Provider } from "react-redux";
import store from "./redux/store";
import StudentRegistration from "./pages/StudentSection/StudentRegistration";
import LCRequests from "./pages/StudentSection/LCRequests";
import FeeReceiptRequests from "./pages/StudentSection/FeeReceiptRequests";
import ScholarshipRequests from "./pages/StudentSection/ScholarshipRequests";
import Layout from "./layouts/Layout";
import AllocateGrades from "./pages/Faculty/AllocateGrades";
import PrivateRoute from "./components/Routing/PrivateRoute";
const App = () => {
  const [showSidebarAndNavbar, setShowSidebarAndNavbar] = useState(false);

  useEffect(() => {
    if (
      location.pathname !== "/login" &&
      location.pathname !== "/Faculty/login" &&
      location.pathname !== "/StudentSection/login"
    ) {
      setShowSidebarAndNavbar(true);
    } else {
      setShowSidebarAndNavbar(false);
    }
  }, [location]);

  return (
    <Provider store={store}>
      {" "}
      <AuthState>
        <AlertState>
          <UserState>
            <Router>
              <Fragment>
                <Layout showSidebarAndNavbar={showSidebarAndNavbar}>
                  <Routes>
                    {/* STUDENT ROUTES*/}
                    <Route
                      path="/profile"
                      element={<PrivateRoute component={Profile} />}
                    />

                    <Route
                      path="/login"
                      element={
                        <Login
                          role="Student"
                          setShowSidebarAndNavbar={setShowSidebarAndNavbar}
                        />
                      }
                    />
                    {/*<Route path="/" element={<Profile />} />*/}

                    <Route
                      path="/Academics/AcademicProfile"
                      element={<Academic />}
                    />
                    <Route path="/elective" element={<Home />} />
                    <Route
                      path="/Academics/ElectiveRegistration"
                      element={<Subjectallocation />}
                    />

                    <Route
                      path="/Applications/RequestBonafide"
                      element={<RequestBonafide />}
                    />
                    <Route path="/Applications/Queries" element={<Query />} />
                    <Route
                      path="/Applications/LetterFormats"
                      element={<LetterFormats />}
                    />
                    <Route
                      path="/Applications/FeeReceipt/"
                      element={<FeeReceiptForm />}
                    />
                    <Route
                      path="/Applications/LeavingCertificate/"
                      element={<LeavingCertificateForm />}
                    />

                    <Route path="/result" element={<Result />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/updateProfile" element={<UpdateProfile />} />
                    <Route
                      path="/Academics/SemesterCreditRegistration"
                      element={<SemesterCreditRegistration />}
                    />

                    <Route
                      path="/Scholarship/ScholarshipsAvailable"
                      element={<ScholarshipsAvailable />}
                    />
                    <Route path="/notifications/" element={<Notifications />} />

                    <Route path="/faq/" element={<FAQ />} />

                    <Route
                      path="/Faculty/UploadMarks"
                      element={<UploadMarks />}
                    />
                    <Route
                      path="/Faculty/AllocatedGrades"
                      element={<AllocateGrades />}
                    />
                    {/* FACULTY ROUTES*/}
                    <Route
                      path="/Faculty/login"
                      element={
                        <Login
                          role="Faculty"
                          setShowSidebarAndNavbar={setShowSidebarAndNavbar}
                        />
                      }
                    />
                    <Route path="/Faculty/" element={<FacultyHome />} />
                    <Route
                      path="/Faculty/ManageAcademics/ElectiveRegistration"
                      element={<ElectiveRegistration />}
                    />
                    <Route
                      path="/Faculty/manageResult"
                      element={<ManageResult />}
                    />
                    <Route
                      path="/Faculty/ManageAcademics/ElectiveAllocation"
                      element={<ElectiveAllocation />}
                    />

                    {/*STUDENTSECTION ROUTES*/}

                    <Route
                      path="/StudentSection/login"
                      element={
                        <Login
                          role="StudentsSection"
                          setShowSidebarAndNavbar={setShowSidebarAndNavbar}
                        />
                      }
                    />

                    <Route
                      path="/StudentSection/"
                      element={<StudentSectionHome />}
                    />

                    <Route
                      path="/StudentSection/notifications"
                      element={<StudentSectionNotifications />}
                    />

                    <Route
                      path="/StudentSection/Request/BonafideRequests"
                      element={<Bonafides />}
                    />

                    <Route
                      path="/StudentSection/Request/LeavingCertificateRequests"
                      element={<LCRequests />}
                    />
                    <Route
                      path="/StudentSection/Request/FeeReceiptRequests"
                      element={<FeeReceiptRequests />}
                    />
                    <Route
                      path="/StudentSection/Request/ScholarshipRequests"
                      element={<ScholarshipRequests />}
                    />
                    <Route
                      path="/StudentSection/StudentRegistration"
                      element={<StudentRegistration />}
                    />
                    {/* <Route
                        path="/StudentSection/Scholarship/ScholarshipsAvailable"
                        element={<Scholarships />}
                      /> */}
                    <Route
                      path="/StudentSection/Scholarship/RequestedBonafides"
                      element={<Bonafides />}
                    />
                    <Route
                      path="/StudentSection/Scholarship/LetterFormats"
                      element={<LetterFormat />}
                    />
                    <Route
                      path="/StudentSection/Scholarship/Queries"
                      element={<Queries />}
                    />
                  </Routes>
                </Layout>
              </Fragment>
            </Router>
          </UserState>
        </AlertState>
      </AuthState>
    </Provider>
  );
};

export default App;
