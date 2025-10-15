import { testDatabaseConnection } from './mongoose';

async function runTest() {
  console.log('Starting database connection test...');
  
  try {
    const result = await testDatabaseConnection();
    
    if (result.success) {
      console.log('\n=== DATABASE CONNECTION SUCCESSFUL ===');
      // @ts-ignore
      console.log(`Database: ${result.details.database}`);
      // @ts-ignore
      console.log(`Host: ${result.details.host}`);
      // @ts-ignore
      console.log(`Port: ${result.details.port}`);
      console.log('=======================================\n');
    } else {
      console.log('\n=== DATABASE CONNECTION FAILED ===');
      console.log(`Reason: ${result.message}`);
      console.log('==================================\n');
    }
  } catch (error) {
    console.error('\n=== UNEXPECTED ERROR ===');
    console.error(error);
    console.error('========================\n');
  }
  
  // Exit the process after the test
  process.exit(0);
}

// Run the test
runTest();