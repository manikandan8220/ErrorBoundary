import React from 'react';

// import ErrorBoundary from './Component1/Errorsimulator';
// import SimpleErrorHandler from './Component/SimpleErrorHandler';
// import Errorsimulator from './Component1/Errorsimulator';
// import Simpleerrorfallback from './Component2/Simpleerrorfallback';
// import Customerror from './Component3/Customerror';
// import Functionerror from './Component4/Functionerror';
// import Globalerror from './Component5/Globalerror';


// import ComponentA from './Component6/ComponentA';
// import ComponentB from './Component6/ComponentB';
// import ComponentC from './Component7/Componentc';
// import ComponentD from './Component7/ComponentD';
// import Errorboundarywrpper from './Component6/Errorboundarywrpper';
// import ErrorBoundaryWrapper from './Component8/ErrorBoundaryWrapper';

// import ErrorBoundaryWrapper from './component9/ErrorBoundaryWrapper';
// import AsyncComponent from './component9/AsyncComponent';

// import ReusableErrorBoundary from './Component10/ReusableErrorBoundary';

// import ReusableErrorBoundary from './Component11/ReusableErrorBoundary';
// import ComponentE from './Component11/ComponentE';
// import ComponentF from './Component11/ComponentF';

// import ReusableErrorBoundary from './Component12/ReusableErrorBoundary';
// import Counter from './Component12/Counter';

// import ReusableErrorBoundary from './Component13/ReusableErrorBoundary';
// import UserList from './Component13/UserList';

// import ReusableErrorBoundary from './Component14/ReusableErrorBoundary';
// import UserForm from './Component14/UserForm';

import ReusableErrorBoundary from './Component15/ReusableErrorBoundary';
import JokeFetcher from './Component15/JokeFetcher';


function App() {

  // const ProblemComponent = () => {
  //   throw new Error('Test error!');
  //   return <div>This will not render</div>;
  // };

  // const BuggyComponent = () => {
  //   throw new Error('Unexpected crash!');
  // };

  return (
    <>
    <div>

//1
        {/* <SimpleErrorHandler/> */}
         
//2
       {/* <ErrorBoundary>
             <Errorsimulator/>
       </ErrorBoundary> */}
    
//3
       {/* <Simpleerrorfallback/> */}

//4
        {/* <Customerror/> */}

//5
        {/* <Functionerror/> */}

//6
        {/* <Globalerror/> */}

//7

        {/* <Errorboundarywrpper>
            <ComponentA/>
            <ComponentB/>
        </Errorboundarywrpper> */}

//8
        {/* <Errorboundarywrpper>
              <ComponentC/>
              <ComponentD/>
        </Errorboundarywrpper> */}

//9
        {/* <ErrorBoundaryWrapper>
            <ProblemComponent />
          </ErrorBoundaryWrapper> */}
//10

    {/* <h2>Async Error Handling Example</h2>
      <ErrorBoundaryWrapper>
        <AsyncComponent />
      </ErrorBoundaryWrapper> */}

//11
      {/* <h2>Reusable Error Boundary Example</h2>
      <ReusableErrorBoundary>
           <BuggyComponent/>
        </ReusableErrorBoundary> */}
//12   
        {/* <ReusableErrorBoundary>
            <ComponentE/>
        </ReusableErrorBoundary>

        <ReusableErrorBoundary>
          <ComponentF/>
        </ReusableErrorBoundary> */}

  //task 1      
         {/* <ReusableErrorBoundary>
            <Counter/>
         </ReusableErrorBoundary> */}

  //task 2
        {/* <ReusableErrorBoundary>
           <UserList />
        </ReusableErrorBoundary> */}

  //task 3
           
            {/* <ReusableErrorBoundary>
                <UserForm/>
            </ReusableErrorBoundary> */}

  //task 4

          <ReusableErrorBoundary>
             <JokeFetcher/>
          </ReusableErrorBoundary>        
            
    
    </div>
    </>
  )
}

export default App